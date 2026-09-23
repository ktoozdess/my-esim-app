import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | Pronto eSIM",
    description:
        "Read the Privacy Policy to learn how Pronto eSIM protects and manages your personal data.",
    alternates: {
        canonical: "https://www.prontoesim.com/privacy",
    },
};

const collectedData = [
    {
        title: "Email address",
        text: "Required solely to send your eSIM activation QR code, order receipt, and technical support updates.",
    },
    {
        title: "Order & transaction data",
        text: "Information about your selected eSIM plan, payment confirmation status, and transaction IDs provided by our payment gateway providers.",
    },
    {
        title: "Device & technical data",
        text: "Basic log data, such as IP address and browser type, collected automatically for security, fraud prevention, and session management.",
    },
];

const usageReasons = [
    "Process transactions and deliver your digital eSIM activation profile.",
    "Provide technical support and troubleshoot network activation issues.",
    "Prevent fraudulent activity and secure our infrastructure.",
];

const privacySections = [
    {
        title: "Third-Party Services & Data Sharing",
        body: "We do not sell, rent, or trade your personal information. We share only the minimum data necessary with trusted providers, including payment processors for secure checkout and eSIM network partners for automated profile provisioning.",
    },
    {
        title: "Data Security & Retention",
        body: "We use encryption and security protocols to safeguard your information. Minimal transaction records are retained only for as long as necessary to comply with legal obligations and resolve customer support requests.",
    },
    {
        title: "Your Rights",
        body: "Depending on your jurisdiction, including GDPR protections in the EU, you may request access to, correction of, or deletion of your email address and transaction logs from our systems.",
    },
];

export function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans antialiased">
            <section className="border-b border-slate-200/60 bg-gradient-to-b from-indigo-50/60 via-white to-[#f8fafc]">
                <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
                    <div className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-indigo-700 shadow-sm">
                        Legal Information
                    </div>

                    <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
                        Privacy Policy
                    </h1>

                    <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                        Pronto eSIM respects your privacy and keeps data collection limited to what
                        is needed to deliver and support your eSIM service.
                    </p>

                    <p className="mt-5 text-sm font-medium text-slate-500">
                        Last updated: September 2026
                    </p>
                </div>
            </section>

            <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                    <section className="border-b border-slate-200/70 pb-8">
                        <p className="text-base leading-8 text-slate-600">
                            This Privacy Policy explains how we collect and handle your information
                            when you visit our website and use our travel eSIM services.
                        </p>
                    </section>

                    <section className="border-b border-slate-200/70 py-8">
                        <h2 className="text-xl font-bold tracking-tight text-slate-900">
                            Information We Collect
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                            We operate with a privacy-first approach and minimize data collection.
                        </p>

                        <div className="mt-6 grid gap-4">
                            {collectedData.map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5"
                                >
                                    <h3 className="text-sm font-bold text-indigo-800">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-7 text-slate-600">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
                            <p className="text-sm font-semibold leading-7 text-emerald-800">
                                We do not collect or request identity verification documents, KYC
                                files, passport details, national IDs, or home addresses.
                            </p>
                        </div>
                    </section>

                    <section className="border-b border-slate-200/70 py-8">
                        <h2 className="text-xl font-bold tracking-tight text-slate-900">
                            How We Use Your Information
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                            We use your data strictly for service delivery and security.
                        </p>

                        <ul className="mt-6 space-y-3">
                            {usageReasons.map((item) => (
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

                    <div className="divide-y divide-slate-200/70">
                        {privacySections.map((section, index) => (
                            <section
                                key={section.title}
                                className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr]"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 text-sm font-bold text-indigo-600">
                                    {index + 3}
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
                            Contact Us
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                            If you have questions about this Privacy Policy, contact us at{" "}
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
                            href="/terms-of-service"
                            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98]"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="/refund"
                            className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98]"
                        >
                            Refund Policy
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
