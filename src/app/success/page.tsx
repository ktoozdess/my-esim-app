"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SuccessPage() {
    const router = useRouter();

    useEffect(() => {
        const hasInitiated = sessionStorage.getItem("payment_initiated");

        if (!hasInitiated) {
            router.replace("/");
        } else {
            sessionStorage.removeItem("payment_initiated");
        }
    }, [router]);

    return (
        <main className="flex-1 bg-slate-50 flex items-center justify-center py-16 px-4">
            <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-100/40 text-center">
                <div className="mx-auto my-4 w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-3xl animate-bounce">
                    🎉
                </div>

                <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl mt-6">
                    Payment Received!
                </h1>

                <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                    Your transaction is broadcasting to the blockchain network. Our automated system
                    has already started provisioning your digital SIM card.
                </p>

                <div className="mt-8 bg-slate-50 rounded-2xl p-5 border border-slate-100 text-left space-y-4">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        What happens next?
                    </h3>

                    <div className="flex items-start gap-3 text-sm">
                        <span className="text-emerald-500 font-bold mt-0.5">1.</span>
                        <p className="text-slate-600">
                            <strong>Blockchain Confirmation:</strong> Wait 1–3 minutes for the
                            crypto transaction to fully clear on-chain.
                        </p>
                    </div>

                    <div className="flex items-start gap-3 text-sm">
                        <span className="text-emerald-500 font-bold mt-0.5">2.</span>
                        <p className="text-slate-600">
                            <strong>Check Your Inbox:</strong> A QR code along with the LPA manual
                            activation string will be sent instantly to your email.
                        </p>
                    </div>
                </div>

                <div className="mt-8">
                    <Link
                        href="/"
                        className="block w-full text-center py-4 px-6 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 active:scale-[0.99] transition-all duration-200 text-sm shadow-md"
                    >
                        Back to Homepage
                    </Link>
                </div>
            </div>
        </main>
    );
}
