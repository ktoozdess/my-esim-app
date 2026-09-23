import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Refund Policy | Pronto eSIM",
    description: "Read the Refund & Cancellation Policy for Pronto eSIM travel data services.",
    alternates: {
        canonical: "https://www.prontoesim.com/refund-policy",
    },
};

const refundEligibleCases = [
    {
        title: "Technical failure",
        text: "If the provided eSIM profile fails to function due to a technical error on our side or a network provider failure, and our support team cannot resolve the issue or issue a replacement profile within 96 hours.",
    },
    {
        title: "Unrevealed or unactivated profiles",
        text: "If you purchased an eSIM profile but have not downloaded, scanned, or activated the QR code profile, you are eligible for a full refund within 14 days of purchase.",
    },
];

const nonRefundableCases = [
    "Your device is not eSIM-compatible or is carrier-locked.",
    "The eSIM has already been scanned, activated, or data consumption has started on the profile.",
    "Connection issues arise from incorrect user configuration, device settings, or a local coverage outage beyond our control.",
    "The validity period of the eSIM plan has expired.",
];

export function RefundPolicyPage() {
    return (
        <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans antialiased">
            <section className="border-b border-slate-200/60 bg-gradient-to-b from-indigo-50/60 via-white to-[#f8fafc]">
                <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
                    <div className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 shadow-sm">
                        Legal Information
                    </div>

                    <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                        Refund & Cancellation Policy
                    </h1>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                        We aim to provide reliable global mobile connectivity. Because eSIM profiles
                        are digital products, refunds are handled under the conditions below.
                    </p>

                    <p className="mt-5 text-sm font-medium text-slate-500">
                        Last updated: September 2026
                    </p>
                </div>
            </section>

            <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                    <section className="border-b border-slate-200/70 pb-8">
                        <h2 className="text-xl font-bold tracking-tight text-slate-900">
                            Refund Eligibility
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                            A full or partial refund may be issued under the following conditions:
                        </p>

                        <div className="mt-6 grid gap-4">
                            {refundEligibleCases.map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5"
                                >
                                    <h3 className="text-sm font-bold text-emerald-800">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-7 text-slate-600">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="border-b border-slate-200/70 py-8">
                        <h2 className="text-xl font-bold tracking-tight text-slate-900">
                            Non-Refundable Cases
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                            Refunds will not be issued in the following cases:
                        </p>

                        <ul className="mt-6 space-y-3">
                            {nonRefundableCases.map((item) => (
                                <li
                                    key={item}
                                    className="flex gap-3 text-sm leading-7 text-slate-600"
                                >
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-indigo-500" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="py-8">
                        <div className="grid gap-4 sm:grid-cols-[3rem_1fr]">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 text-sm font-bold text-indigo-600">
                                3
                            </div>

                            <div>
                                <h2 className="text-xl font-bold tracking-tight text-slate-900">
                                    How to Request a Refund
                                </h2>
                                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                                    Contact our technical support team within 14 days of purchase.
                                    Please include your Order ID or Transaction Hash, purchase
                                    email, and a brief description or screenshot of the technical
                                    issue.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                        <h2 className="text-lg font-bold tracking-tight text-slate-900">
                            Contact & Processing Time
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                            Contact us at{" "}
                            <a
                                href="mailto:tem.group.prilavok@gmail.com"
                                className="font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
                            >
                                tem.group.prilavok@gmail.com
                            </a>
                            . Approved refunds are processed back to the original payment method
                            used during checkout within 5-10 business days.
                        </p>
                    </section>

                    <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-200/70 pt-8">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-100 transition-all duration-200 hover:bg-indigo-700 active:scale-[0.98]"
                        >
                            Store
                        </Link>
                        <Link
                            href="/terms-of-service"
                            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98]"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
