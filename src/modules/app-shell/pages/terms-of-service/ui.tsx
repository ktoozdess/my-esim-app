import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms of Service | Pronto eSIM",
    description:
        "Read the Terms of Service for purchasing and using Pronto eSIM travel data profiles.",
    alternates: {
        canonical: "https://www.prontoesim.com/terms-of-service",
    },
};

const termsSections = [
    {
        title: "Service Overview",
        body: "Pronto eSIM provides prepaid digital eSIM mobile data profiles for international travel connectivity. Our products are delivered electronically in the form of activation keys, QR codes, or automated network installation profiles.",
    },
    {
        title: "User Responsibilities & Device Compatibility",
        body: "Before purchasing, you are responsible for ensuring that your mobile device is eSIM-compatible and carrier-unlocked. You also agree to use the data services in compliance with local telecommunication regulations and the laws of the destination country. Fair usage policies may apply depending on local network operator agreements.",
    },
    {
        title: "Purchases and Payments",
        body: "Prices are displayed on the platform before checkout and are billed when an order is confirmed. Transactions are processed securely through authorized third-party payment gateways, including crypto processors and merchant of record platforms.",
    },
    {
        title: "Digital Delivery",
        body: "Upon payment confirmation, your eSIM activation profile will be generated automatically and provided by email and/or on-screen confirmation. Delivery is usually completed within 30 seconds to a few minutes.",
    },
    {
        title: "Intellectual Property",
        body: "All logos, software, website designs, and content belong to Pronto eSIM and its licensors. Unauthorized copying or redistribution is strictly prohibited.",
    },
];

export function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans antialiased">
            <section className="border-b border-slate-200/60 bg-gradient-to-b from-indigo-50/60 via-white to-[#f8fafc]">
                <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
                    <div className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 shadow-sm">
                        Legal Information
                    </div>

                    <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                        Terms of Service
                    </h1>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                        Please read these terms before purchasing or using Pronto eSIM travel data
                        profiles.
                    </p>

                    <p className="mt-5 text-sm font-medium text-slate-500">
                        Last updated: September 2026
                    </p>
                </div>
            </section>

            <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                    <div className="border-b border-slate-200/70 pb-8">
                        <p className="text-base leading-8 text-slate-600">
                            Welcome to Pronto eSIM. By purchasing or using our digital travel eSIM
                            profiles and related services, you agree to be bound by the following
                            terms and conditions.
                        </p>
                    </div>

                    <div className="divide-y divide-slate-200/70">
                        {termsSections.map((section, index) => (
                            <section
                                key={section.title}
                                className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr]"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 text-sm font-bold text-indigo-600">
                                    {index + 1}
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold tracking-tight text-slate-900">
                                        {section.title}
                                    </h2>
                                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                                        {section.body}
                                    </p>
                                </div>
                            </section>
                        ))}
                    </div>

                    <section className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                        <h2 className="text-lg font-bold tracking-tight text-slate-900">
                            Contact Information
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                            For support or inquiries regarding these Terms, please contact us at{" "}
                            <a
                                href="mailto:tem.group.prilavok@gmail.com"
                                className="font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
                            >
                                tem.group.prilavok@gmail.com
                            </a>
                            .
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
                            href="/about"
                            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98]"
                        >
                            About Us
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
