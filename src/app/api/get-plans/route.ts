import { NextResponse } from "next/server";
import crypto from "crypto";
import { unstable_cache } from "next/cache";

export const dynamic = "force-dynamic";

interface RawProviderPlan {
    packageCode?: string;
    id?: string;
    packageName?: string;
    name?: string;
    locationName?: string;
    locationCode?: string;
    regionCode?: string;
    volume?: number;
    dataAmount?: number;
    duration?: number;
    price?: number;
}

interface ProviderApiResponse {
    obj?: {
        packageList?: RawProviderPlan[];
    };
}

async function fetchGlobalPlansFromProvider() {
    const ACCESS_CODE = process.env.ESIM_ACCESS_CODE || "";
    const SECRET_KEY = process.env.ESIM_SECRET_KEY || "";

    if (!ACCESS_CODE || !SECRET_KEY) {
        throw new Error("Missing eSIM Access API credentials");
    }

    const timestamp = Date.now().toString();
    const requestId = crypto.randomUUID();
    const signData = `${requestId}${timestamp}${ACCESS_CODE}`;

    const signature = crypto.createHmac("sha256", SECRET_KEY).update(signData).digest("hex");

    console.log("🔄 CACHE MISS: Fetching fresh heavy catalog from eSIM Access...");

    const response = await fetch("https://api.esimaccess.com/api/v1/open/package/list", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "RT-AccessCode": ACCESS_CODE,
            "RT-RequestID": requestId,
            "RT-Timestamp": timestamp,
            "RT-Signature": signature,
        },
        body: JSON.stringify({}),
    });

    if (!response.ok) {
        throw new Error(`eSIM Access API error: ${response.status}`);
    }

    const rawData = (await response.json()) as ProviderApiResponse;
    const rawList = rawData?.obj?.packageList || [];

    const minimizedList = rawList.map((plan) => ({
        packageCode: plan.packageCode || plan.id || "",
        packageName: plan.packageName || plan.name || plan.locationName || "",
        locationCode: plan.locationCode || plan.regionCode || "",
        volume: plan.volume || plan.dataAmount || 0,
        duration: plan.duration || 0,
        price: plan.price || 0,
    }));

    return {
        obj: {
            packageList: minimizedList,
        },
    };
}

const getCachedPlans = unstable_cache(
    async () => fetchGlobalPlansFromProvider(),
    ["esim-global-plans-cache"],
    { revalidate: 1800 },
);

export async function GET() {
    try {
        const data = await getCachedPlans();
        return NextResponse.json(data, { status: 200 });
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
        console.error("Backend API Error:", errorMessage);
        return NextResponse.json({ error: "Failed to fetch eSIM plans" }, { status: 500 });
    }
}
