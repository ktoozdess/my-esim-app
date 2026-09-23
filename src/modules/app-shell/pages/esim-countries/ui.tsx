import Link from "next/link";
import { notFound } from "next/navigation";

import { esimCountries } from "./esimCountries";

interface CountryPageProps {
    params: Promise<{
        country: string;
    }>;
}

export function generateStaticParams() {
    return esimCountries.map((country) => ({
        country: country.slug,
    }));
}

export async function generateMetadata({ params }: CountryPageProps) {
    const { country: slug } = await params;

    const country = esimCountries.find((item) => item.slug === slug);

    if (!country) {
        return {};
    }

    return {
        title: `eSIM for ${country.name} | Pronto eSIM`,
        description: country.metaDescription,
    };
}

export default async function CountryPage({ params }: CountryPageProps) {
    const { country: slug } = await params;

    const country = esimCountries.find((item) => item.slug === slug);

    if (!country) {
        notFound();
    }

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="mx-auto max-w-5xl text-center">
                    <div className="mb-6 text-6xl sm:text-7xl">{country.flag}</div>

                    <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl">
                        eSIM for {country.name}
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500 sm:text-xl">
                        {country.description}
                    </p>

                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link
                            href={`/buy?country=${country.slug}`}
                            className="w-full rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-700 sm:w-auto"
                        >
                            Get eSIM for {country.name}
                        </Link>

                        <a
                            href="#how-it-works"
                            className="w-full rounded-xl border border-slate-200 px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto"
                        >
                            How it works
                        </a>
                    </div>
                </div>
            </section>

            {/* Highlights */}
            <section className="border-y border-slate-100 bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
                <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
                    {country.highlights.map((highlight) => (
                        <div
                            key={highlight}
                            className="rounded-2xl bg-white p-5 text-center shadow-sm"
                        >
                            <p className="text-sm font-semibold text-slate-800">{highlight}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Plans */}
            <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="mx-auto max-w-5xl">
                    <div className="text-center">
                        <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                            eSIM plans
                        </p>

                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            Choose your {country.name} data plan
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-slate-500">
                            Choose the amount of mobile data that fits your trip and activate your
                            eSIM when you need it.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-4 sm:grid-cols-3">
                        {["1 GB", "5 GB", "10 GB"].map((data) => (
                            <div key={data} className="rounded-2xl border border-slate-200 p-6">
                                <p className="text-2xl font-bold text-slate-900">{data}</p>

                                <p className="mt-2 text-sm text-slate-500">
                                    Mobile data in {country.name}
                                </p>

                                <Link
                                    href={`/buy?country=${country.slug}&data=${data}`}
                                    className="mt-6 block rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-700"
                                >
                                    Choose plan
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section id="how-it-works" className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="mx-auto max-w-5xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            How to use an eSIM in {country.name}
                        </h2>
                    </div>

                    <div className="mt-10 grid gap-6 sm:grid-cols-3">
                        {[
                            {
                                number: "01",
                                title: "Choose a plan",
                                text: `Select an eSIM data plan for your trip to ${country.name}.`,
                            },
                            {
                                number: "02",
                                title: "Install your eSIM",
                                text: "Follow the installation instructions on your compatible device.",
                            },
                            {
                                number: "03",
                                title: "Connect",
                                text: `Activate your plan and use mobile data in ${country.name}.`,
                            },
                        ].map((step) => (
                            <div key={step.number} className="rounded-2xl bg-white p-6">
                                <span className="text-sm font-bold text-indigo-600">
                                    {step.number}
                                </span>

                                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                                    {step.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-slate-500">{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            eSIM for {country.name}: FAQ
                        </h2>
                    </div>

                    <div className="mt-10 divide-y divide-slate-200">
                        {country.faq.map((item) => (
                            <details key={item.question} className="group py-5">
                                <summary className="cursor-pointer list-none pr-6 text-base font-semibold text-slate-900">
                                    {item.question}
                                </summary>

                                <p className="mt-3 text-sm leading-6 text-slate-500">
                                    {item.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
                <div className="mx-auto max-w-5xl rounded-3xl bg-slate-900 px-6 py-12 text-center sm:px-12 sm:py-16">
                    <div className="text-5xl">{country.flag}</div>

                    <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Ready to stay connected in {country.name}?
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-slate-300">
                        Get your eSIM and stay connected throughout your trip.
                    </p>

                    <Link
                        href={`/buy?country=${country.slug}`}
                        className="mt-8 inline-flex rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                    >
                        Get eSIM for {country.name}
                    </Link>
                </div>
            </section>
        </div>
    );
}
