import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Us | Buy Travel eSIM with Crypto (USDT, TON, BTC)",
    description:
        "Discover the privacy-first travel eSIM shop. Buy global mobile data plans anonymously using crypto (USDT, TON, Litecoin) with no KYC, no ID, and instant delivery.",
    keywords: [
        "crypto esim",
        "buy esim with usdt",
        "anonymous esim",
        "travel internet crypto",
        "no kyc esim",
        "ton esim shop",
        "travel data plans crypto",
    ],
    alternates: {
        canonical: "https://www.prontoesim.com/about",
    },
    openGraph: {
        title: "About Our Crypto eSIM Service | Borderless Travel Internet",
        description:
            "Get instant global connectivity. Pay with USDT, TON, or BTC. No passports, no credit cards required.",
        type: "website",
        url: "https://www.prontoesim.com/about",
    },
};

export function AboutPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        mainEntity: {
            "@type": "WebApplication",
            name: "Pronto eSIM Store",
            applicationCategory: "TravelApplication",
            operatingSystem: "iOS, Android",
            description:
                "Automated gateway to purchase international travel eSIM profiles using cryptocurrency.",
            offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "0.50",
            },
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans antialiased">
                {/* Hero / Header Section */}
                <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/50 via-white to-[#f8fafc] pt-16 pb-16 lg:pt-24 lg:pb-20 border-b border-slate-200/60">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 border border-indigo-100 text-indigo-700 mb-6 shadow-sm">
                            <svg
                                className="w-3.5 h-3.5 text-indigo-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                            Decentralizing Global Roaming
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
                            Your Connection. <br />
                            <span className="text-indigo-600">Wherever You Are.</span>
                        </h1>

                        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 font-normal leading-relaxed">
                            Pronto eSIM bridges top-tier global mobile networks with Web3 payment
                            rails. Buy high-speed travel internet in 190+ countries — instantly and
                            anonymously.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all duration-200 shadow-md shadow-indigo-100 active:scale-[0.98]"
                            >
                                Browse Data Plans
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Main Content */}
                <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
                    {/* Mission Statement */}
                    <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm">
                        <div className="max-w-3xl">
                            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                                Our Mission: Frictionless & Anonymous eSIM Access
                            </h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed text-base">
                                <p>
                                    In the era of decentralized finance, traditional travel telecom
                                    remains outdated. When arriving at a foreign transit airport,
                                    travelers often face a frustrating loop: blocked credit cards
                                    due to bank flags, overpriced local SIM kiosks, or invasive
                                    personal verification forms and passport KYC checks.
                                </p>
                                <p>
                                    Our platform was built by independent developers to eliminate
                                    these friction points. By uniting automated eSIM provisioning
                                    APIs with non-custodial crypto payment gateways, we allow you to{" "}
                                    <strong>buy eSIM data plans with crypto</strong> in under 30
                                    seconds.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Features Grid */}
                    <section className="space-y-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200/60 pb-5">
                            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                                Why Choose Pronto eSIM?
                            </h2>
                            <p className="text-sm text-slate-500 mt-1 md:mt-0">
                                Built for privacy advocates, nomads & Web3 travelers
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Feature 1 */}
                            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-5">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">
                                    No KYC or Passports Required
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    We respect your data privacy. No identity verification, personal
                                    document uploads, or long registrations are ever required.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-5">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">
                                    Instant QR Code Delivery
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Our hybrid backend processes blockchain transactions seamlessly,
                                    generating your QR profile the moment payment hits the ledger.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-5">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">
                                    Zero Card & Currency Fees
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Skip expensive international legacy banking fees, credit card
                                    holds, and unfavorable foreign exchange markup rates.
                                </p>
                            </div>

                            {/* Feature 4 */}
                            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-5">
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11a2 2 0 012-2h1.065M12 2a10 10 0 100 20 10 10 0 000-20z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">
                                    190+ Countries Covered
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Stay connected to 5G/4G high-speed networks worldwide including
                                    Europe, Asia, USA, LATAM, and Middle East.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Infrastructure & Security Box */}
                    <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div className="space-y-3 max-w-2xl">
                                <div className="inline-flex items-center gap-2 text-indigo-400 font-semibold text-xs uppercase tracking-wider">
                                    🔒 Privacy-First Digital Infrastructure
                                </div>
                                <h3 className="text-2xl font-bold tracking-tight">
                                    Secure Network Routing & Zero Web Logs
                                </h3>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    We utilize enterprise-grade telecom routing (Breakout IPs via
                                    FR/NL) ensuring high-speed data transmission and secure routing.
                                    We do not store web logs, telemetry, or personal details. All
                                    that is required is a valid destination choice and an email
                                    address to receive your activation key.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Support Block */}
                    <section className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-lg font-bold text-slate-900">Need Assistance?</h3>
                            <p className="text-slate-600 text-sm mt-1">
                                eSIMs are issued automatically 24/7. Our technical team is standing
                                by to help with setup or replacement profiles.
                            </p>
                        </div>
                        <a
                            href="mailto:tem.group.prilavok@gmail.com"
                            className="flex-shrink-0 px-6 py-3 bg-white border border-slate-200 text-indigo-600 font-semibold rounded-xl hover:bg-slate-50 active:scale-[0.98] transition-all text-sm shadow-sm"
                        >
                            tem.group.prilavok@gmail.com
                        </a>
                    </section>
                </main>
            </div>
        </>
    );
}
