import type { Metadata } from "next";

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
        canonical: "https://www.blossom-esim.mobi/about",
    },
    openGraph: {
        title: "About Our Crypto eSIM Service | Borderless Travel Internet",
        description:
            "Get instant global connectivity. Pay with USDT, TON, or BTC. No passports, no credit cards required.",
        type: "website",
        url: "https://www.blossom-esim.mobi/about",
    },
};

export default function AboutPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        mainEntity: {
            "@type": "WebApplication",
            name: "Blossom eSIM Store",
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

            <main className="flex-1 bg-white text-slate-900 py-16 px-4 sm:px-6 lg:px-8">
                <article className="max-w-3xl mx-auto">
                    <header className="mb-12">
                        <h1 className="text-4xl font-black tracking-tight sm:text-5xl mb-4 text-slate-900">
                            About Our Crypto eSIM Service
                        </h1>
                        <p className="text-xl text-slate-500 font-medium leading-relaxed">
                            We are decentralizing global roaming. Buy international travel internet
                            plans with USDT, TON, and BTC — instantly and securely.
                        </p>
                    </header>

                    <hr className="border-slate-100 my-8" />

                    <div className="space-y-10 text-base text-slate-600 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-950 mb-3 tracking-tight">
                                The Mission: Borderless & Anonymous eSIM Access
                            </h2>
                            <p>
                                In the era of decentralized finance, traditional travel telecom is
                                outdated. When arriving at a foreign transit airport, travelers
                                often face a frustrating loop: blocked credit cards due to banking
                                freezes, expensive local SIM kiosks, or invasive requests for
                                passport data and KYC identity checks.
                            </p>
                            <p className="mt-3">
                                Our platform was built by independent developers to eliminate these
                                friction points. We provide a bridge between top-tier global telecom
                                networks and Web3 ecosystems, allowing you to **buy eSIM data plans
                                with crypto** in under 30 seconds.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-950 mb-3 tracking-tight">
                                Why Buy Travel Internet with Cryptocurrency?
                            </h2>
                            <p>
                                By combining automated eSIM provisioning APIs with non-custodial
                                crypto payment gateways, we offer a completely optimized roaming
                                experience:
                            </p>
                            <ul className="list-disc pl-5 mt-3 space-y-2 text-slate-600">
                                <li>
                                    <strong>No KYC or Passports:</strong> We respect your data
                                    privacy. No identity verification is ever required.
                                </li>
                                <li>
                                    <strong>Zero Card Fees:</strong> Skip expensive international
                                    legacy banking fees and currency conversion rates.
                                </li>
                                <li>
                                    <strong>Instant QR Code Delivery:</strong> Our hybrid backend
                                    processes blockchain transactions seamlessly, generating your QR
                                    profile the moment payment hits the ledger.
                                </li>
                                <li>
                                    <strong>190+ Countries Covered:</strong> Stay connected to 5G/4G
                                    networks worldwide including Europe, Asia, USA, and LATAM.
                                </li>
                            </ul>
                        </section>

                        <section className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm">
                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                🔒 Privacy-First Digital Nomads Infrastructure
                            </h3>
                            <p className="text-sm text-slate-500">
                                We utilize enterprise-grade telecom routing (Breakout IPs via FR/NL)
                                ensuring high-speed data transmission and secure routing. We do not
                                store your web logs, telemetry, or personal details. All that is
                                required to fetch your data package is a valid destination choice
                                and an email address to receive your activation keys.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-950 mb-3 tracking-tight">
                                Supported Blockchains & Tokens
                            </h2>
                            <p>
                                To minimize network gas fees for our users, our gateway supports
                                multiple cost-efficient networks. You can easily complete your
                                checkout using:
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 text-sm font-mono text-slate-700">
                                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                                    USDT (TRC-20 / BEP-20)
                                </div>
                                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                                    TON (Telegram Network)
                                </div>
                                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                                    Litecoin (LTC)
                                </div>
                                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                                    Bitcoin (BTC)
                                </div>
                                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                                    Ethereum (ETH)
                                </div>
                                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                                    TRON (TRX)
                                </div>
                            </div>
                        </section>

                        <section className="pt-4">
                            <h2 className="text-2xl font-bold text-slate-950 mb-2 tracking-tight">
                                Customer Support & SLA
                            </h2>
                            <p>
                                Since we host a fully automated infrastructure, eSIMs are issued
                                automatically 24/7. However, if you experience network
                                synchronization issues, activation delays, or configuration bugs,
                                our technical support team is standing by to assist you or issue a
                                replacement profile.
                            </p>
                            <p className="mt-3 font-medium text-slate-900">
                                Contact Technical Support:{" "}
                                <a
                                    href="mailto:tem.group.prilavok@gmail.com"
                                    className="text-indigo-600"
                                >
                                    tem.group.prilavok@gmail.com
                                </a>
                            </p>
                        </section>
                    </div>

                    <footer className="mt-16 pt-8 border-t border-slate-100 text-center sm:text-left">
                        <p className="text-xs text-slate-400">
                            &copy; {new Date().getFullYear()} Crypto eSIM Hub. Powered by automated
                            eSIM Access network & NOWPayments API.
                        </p>
                    </footer>
                </article>
            </main>
        </>
    );
}
