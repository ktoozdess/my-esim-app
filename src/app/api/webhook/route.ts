import { NextResponse } from "next/server";
import crypto from "crypto";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function generateEsimAccessHeaders() {
    const ACCESS_CODE = process.env.ESIM_ACCESS_CODE || "";
    const SECRET_KEY = process.env.ESIM_SECRET_KEY || "";

    const timestamp = Date.now().toString();
    const requestId = crypto.randomUUID();
    const signData = `${requestId}${timestamp}${ACCESS_CODE}`;

    const signature = crypto.createHmac("sha256", SECRET_KEY).update(signData).digest("hex");

    return {
        "Content-Type": "application/json",
        "RT-AccessCode": ACCESS_CODE,
        "RT-RequestID": requestId,
        "RT-Timestamp": timestamp,
        "RT-Signature": signature,
    };
}

export async function POST(request: Request) {
    try {
        const rawBody = await request.text();

        const isLocalTest = request.headers.get("x-test-bypass") === "true";

        if (isLocalTest) {
            console.log("🛠️ [TEST MODE] Received local emulated payment request!");
            const payload = JSON.parse(rawBody);

            const customerEmail = payload.email || "test-customer@mail.com";
            const targetPackageCode = payload.packageCode || "US_1GB_7DAYS";

            console.log(
                `🎯 [TEST MODE] Simulating successful payment for ${targetPackageCode} to ${customerEmail}`,
            );

            const emailSender = process.env.RESEND_FROM_EMAIL || "delivery@blossom-esim.mobi";

            const {} = await resend.emails.send({
                from: `Instant eSIM Store <${emailSender}>`,
                to: [customerEmail],
                subject: `Your eSIM Profile is Ready! (Plan: ${targetPackageCode}) 🌐`,
                html: `
                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px; color: #0f172a;">
                    <div style="max-w: 550px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; padding: 40px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
                        
                        <div style="text-align: center; margin-bottom: 32px;">
                            <span style="font-size: 40px;">✈️</span>
                            <h1 style="font-size: 24px; font-weight: 800; tracking-tight; color: #0f172a; margin-top: 16px; margin-bottom: 8px;">Your eSIM is Ready!</h1>
                            <p style="font-size: 14px; color: #64748b; margin: 0;">Thank you for purchasing data bundle <strong>${targetPackageCode}</strong></p>
                        </div>

                        <div style="background-color: #f8fafc; border-radius: 16px; padding: 24px; text-align: center; border: 1px dashed #cbd5e1; margin-bottom: 24px;">
                            <h3 style="font-size: 14px; font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Method 1: Scan QR Code</h3>
                            <p style="font-size: 13px; color: #64748b; margin-bottom: 16px;">Go to Settings -> Cellular -> Add eSIM, then scan this image:</p>
                            <img src="" alt="eSIM Activation QR Code" width="220" height="220" style="display: block; margin: 0 auto; border-radius: 12px; background-color: white; padding: 10px; border: 1px solid #e2e8f0;" />
                        </div>

                        <div style="margin-bottom: 32px;">
                            <h3 style="font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;">Method 2: Manual Activation</h3>
                            <p style="font-size: 13px; color: #64748b; margin-top: 0; margin-bottom: 8px;">If you cannot scan the QR code, copy and paste this LPA string into manual configuration settings:</p>
                            <div style="background-color: #0f172a; color: #38bdf8; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 12px; padding: 14px; border-radius: 12px; word-break: break-all; border: 1px solid #1e293b;">
                                activationCode
                            </div>
                        </div>

                        <div style="border-top: 1px solid #f1f5f9; padding-top: 24px;">
                            <h4 style="font-size: 13px; font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 12px; display: flex; items-center: center;">💡 Critical Setup Checklist:</h4>
                            <ul style="font-size: 13px; color: #475569; padding-left: 20px; margin: 0; space-y: 8px;">
                                <li style="margin-bottom: 6px;"><strong>Data Roaming:</strong> Make sure to <strong>TURN ON Data Roaming</strong> for this eSIM in your phone settings, or internet won't work.</li>
                                <li style="margin-bottom: 6px;"><strong>APN Configuration:</strong> If internet fails to load but connection bars are visible, set APN field manually to: <span style="font-family: monospace; background-color: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-weight: bold; color: #0f172a;">orange</span> (Leave User/Pass blank).</li>
                                <li><strong>Activation:</strong> Billing cycle starts upon your first native connection to the local network abroad.</li>
                            </ul>
                        </div>

                        <div style="margin-top: 40px; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 20px;">
                            <p style="font-size: 11px; color: #94a3b8; margin: 0;">Need immediate assistance? Contact our team at support@my-esim-app.com</p>
                        </div>

                    </div>
                </div>
            `,
            });

            return NextResponse.json(
                { message: "Test order processed successfully" },
                { status: 200 },
            );
        }

        const lemonSignature = request.headers.get("x-signature") || "";
        const nowpaymentsSignature = request.headers.get("x-nowpayments-sig") || "";

        let customerEmail = "";
        let targetPackageCode = "";

        if (lemonSignature) {
            const webhookSecret = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET || "";
            const hmac = crypto.createHmac("sha256", webhookSecret);
            const digest = hmac.update(rawBody).digest("hex");

            if (
                !crypto.timingSafeEqual(
                    Buffer.from(digest, "hex"),
                    Buffer.from(lemonSignature, "hex"),
                )
            ) {
                console.error("🔒 Lemon Squeezy security verification failed.");
                return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
            }

            const payload = JSON.parse(rawBody);
            if (payload?.meta?.event_name !== "order_created") {
                return NextResponse.json({ message: "Lemon event ignored" }, { status: 200 });
            }

            customerEmail = payload?.data?.attributes?.user_email;
            const passthroughRaw = payload?.meta?.custom_data?.passthrough || "{}";
            const passthroughData = JSON.parse(passthroughRaw);
            targetPackageCode = passthroughData?.packageCode;

            console.log(`💳 [Lemon Squeezy] Verified payment for ${targetPackageCode}`);
        }

        else if (nowpaymentsSignature) {
            const ipnSecret = process.env.NOWPAYMENTS_IPN_SECRET || "";
            const hmac = crypto.createHmac("sha512", ipnSecret);
            const digest = hmac.update(rawBody).digest("hex");

            if (digest !== nowpaymentsSignature) {
                console.error("🔒 NOWPayments security verification failed.");
                return NextResponse.json({ error: "Invalid IPN signature" }, { status: 401 });
            }

            const payload = JSON.parse(rawBody);
            const paymentStatus = payload?.payment_status;

            if (paymentStatus !== "finished" && paymentStatus !== "confirmed") {
                return NextResponse.json(
                    { message: `Crypto status ${paymentStatus} logged` },
                    { status: 200 },
                );
            }

            const orderDescription = (payload?.order_description as string) || "";

            try {
                const descParts = orderDescription.split(" | ");
                targetPackageCode = descParts[0]?.replace("eSIM:", "").trim();
                customerEmail = descParts[1]?.replace("Client:", "").trim();
            } catch {
                console.error("Failed to parse package/email from crypto description");
            }

            console.log(`🪙 [NOWPayments] Verified crypto payment for ${targetPackageCode}`);
        } else {
            return NextResponse.json({ error: "Unknown webhook origin" }, { status: 400 });
        }

        if (!customerEmail || !targetPackageCode) {
            console.error("❌ Missing Email or Package Code after parsing.");
            return NextResponse.json({ error: "Incomplete order data" }, { status: 400 });
        }

        console.log(`🚀 START PROCUREMENT: Buying ${targetPackageCode} for ${customerEmail}`);

        const transactionId = crypto.randomUUID();
        const orderResponse = await fetch("https://api.esimaccess.com/api/v1/open/esim/order", {
            method: "POST",
            headers: generateEsimAccessHeaders(),
            body: JSON.stringify({
                transactionId: transactionId,
                packageInfoList: [{ packageCode: targetPackageCode, count: 1 }],
            }),
        });

        if (!orderResponse.ok) {
            throw new Error(`eSIM Access Order API error: ${orderResponse.status}`);
        }

        const orderJson = await orderResponse.json();
        const orderNo = orderJson?.obj?.orderNo;

        if (!orderNo) {
            throw new Error("eSIM Access did not return a valid orderNo");
        }

        await new Promise((resolve) => setTimeout(resolve, 2500));
        const queryResponse = await fetch("https://api.esimaccess.com/api/v1/open/esim/query", {
            method: "POST",
            headers: generateEsimAccessHeaders(),
            body: JSON.stringify({
                orderNo: orderNo,
                pager: { pageNum: 1, pageSize: 10 },
            }),
        });

        if (!queryResponse.ok) {
            throw new Error(`eSIM Access Query API error: ${queryResponse.status}`);
        }

        const queryJson = await queryResponse.json();
        console.log("🇨🇳 [eSIM Access Real Query Response]:", JSON.stringify(queryJson));

        const firstEsim = queryJson?.obj?.esimList?.[0];
        const qrCodeUrl = firstEsim?.qrCodeUrl;
        const activationCode = firstEsim?.ac;

        if (!qrCodeUrl) {
            throw new Error(`QR Code URL is missing from esimList.`);
        }

        console.log(`✨ SUCCESS! eSIM Issued.`);

        console.log(`✉️ Sending eSIM delivery email via Resend to: ${customerEmail}`);

        const emailSender = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

        const { data: emailResult, error: emailError } = await resend.emails.send({
            from: `Instant eSIM Store <${emailSender}>`,
            to: [customerEmail],
            subject: `Your eSIM Profile is Ready! (Plan: ${targetPackageCode}) 🌐`,
            html: `
                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; padding: 40px 20px; color: #0f172a;">
                    <div style="max-w: 550px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; padding: 40px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
                        
                        <div style="text-align: center; margin-bottom: 32px;">
                            <span style="font-size: 40px;">✈️</span>
                            <h1 style="font-size: 24px; font-weight: 800; tracking-tight; color: #0f172a; margin-top: 16px; margin-bottom: 8px;">Your eSIM is Ready!</h1>
                            <p style="font-size: 14px; color: #64748b; margin: 0;">Thank you for purchasing data bundle <strong>${targetPackageCode}</strong></p>
                        </div>

                        <div style="background-color: #f8fafc; border-radius: 16px; padding: 24px; text-align: center; border: 1px dashed #cbd5e1; margin-bottom: 24px;">
                            <h3 style="font-size: 14px; font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Method 1: Scan QR Code</h3>
                            <p style="font-size: 13px; color: #64748b; margin-bottom: 16px;">Go to Settings -> Cellular -> Add eSIM, then scan this image:</p>
                            <img src="${qrCodeUrl}" alt="eSIM Activation QR Code" width="220" height="220" style="display: block; margin: 0 auto; border-radius: 12px; background-color: white; padding: 10px; border: 1px solid #e2e8f0;" />
                        </div>

                        <div style="margin-bottom: 32px;">
                            <h3 style="font-size: 13px; font-weight: 700; color: #0f172a; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.05em;">Method 2: Manual Activation</h3>
                            <p style="font-size: 13px; color: #64748b; margin-top: 0; margin-bottom: 8px;">If you cannot scan the QR code, copy and paste this LPA string into manual configuration settings:</p>
                            <div style="background-color: #0f172a; color: #38bdf8; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 12px; padding: 14px; border-radius: 12px; word-break: break-all; border: 1px solid #1e293b;">
                                ${activationCode}
                            </div>
                        </div>

                        <div style="border-top: 1px solid #f1f5f9; padding-top: 24px;">
                            <h4 style="font-size: 13px; font-weight: 700; color: #0f172a; margin-top: 0; margin-bottom: 12px; display: flex; items-center: center;">💡 Critical Setup Checklist:</h4>
                            <ul style="font-size: 13px; color: #475569; padding-left: 20px; margin: 0; space-y: 8px;">
                                <li style="margin-bottom: 6px;"><strong>Data Roaming:</strong> Make sure to <strong>TURN ON Data Roaming</strong> for this eSIM in your phone settings, or internet won't work.</li>
                                <li><strong>Activation:</strong> Billing cycle starts upon your first native connection to the local network abroad.</li>
                            </ul>
                        </div>

                        <div style="margin-top: 40px; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 20px;">
                            <p style="font-size: 11px; color: #94a3b8; margin: 0;">Need immediate assistance? Contact our team at tem.group.prilavok@gmail.com</p>
                        </div>

                    </div>
                </div>
            `,
        });

        if (emailError) {
            console.error("❌ Resend Email Delivery Error:", emailError);
        } else {
            console.log(`✨ Email successfully dispatched via Resend! ID: ${emailResult?.id}`);
        }

        return NextResponse.json(
            { message: "eSIM issued and email sent successfully" },
            { status: 200 },
        );
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : "Unknown webhook error";
        console.error("❌ Unified Webhook Handler Error:", errorMessage);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
