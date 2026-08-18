import { NextResponse } from "next/server";

interface NowPaymentsInvoiceResponse {
    invoice_url?: string;
    id?: string;
}

export async function POST(request: Request) {
    try {
        const { esimPackageCode, price, email } = await request.json();

        if (!esimPackageCode || !price || !email) {
            return NextResponse.json(
                { error: "Missing required fields (code, price or email)" },
                { status: 400 },
            );
        }

        const NOWPAYMENTS_API_KEY = process.env.NOWPAYMENTS_API_KEY || "";

        const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

        const response = await fetch("https://api.nowpayments.io/v1/invoice", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": NOWPAYMENTS_API_KEY,
            },
            body: JSON.stringify({
                price_amount: Number(price).toFixed(2),
                price_currency: "usd",
                order_id: crypto.randomUUID(),

                order_description: `eSIM:${esimPackageCode} | Client:${email}`,

                ipn_callback_url: `${siteUrl}/api/webhook`,
                success_url: `${siteUrl}/success`,
                cancel_url: `${siteUrl}`,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(
                `Crypto Gateway responded with status ${response.status}: ${errorText}`,
            );
        }

        const data = (await response.json()) as NowPaymentsInvoiceResponse;

        if (!data.invoice_url) {
            throw new Error("Crypto gateway failed to return an invoice URL");
        }

        return NextResponse.json({ checkoutUrl: data.invoice_url }, { status: 200 });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Unknown invoice creation error";
        console.error("❌ Crypto Invoice Error:", message);
        return NextResponse.json({ error: "Failed to create crypto invoice" }, { status: 500 });
    }
}
