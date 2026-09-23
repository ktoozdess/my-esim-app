import Link from "next/link";
import "./index.css";

const countries = [
    { name: "Italy", flag: "🇮🇹", href: "/esim/italy" },
    { name: "France", flag: "🇫🇷", href: "/esim/france" },
    { name: "Spain", flag: "🇪🇸", href: "/esim/spain" },
    { name: "Germany", flag: "🇩🇪", href: "/esim/germany" },
    { name: "Portugal", flag: "🇵🇹", href: "/esim/portugal" },
    { name: "Greece", flag: "🇬🇷", href: "/esim/greece" },
    { name: "Turkey", flag: "🇹🇷", href: "/esim/turkey" },
    { name: "United Kingdom", flag: "🇬🇧", href: "/esim/united-kingdom" },
];

export default function CountryLinks() {
    return (
        <section className="overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-7 sm:mb-8">
                    <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
                        Stay connected
                    </p>

                    <h2 className="mt-2 max-w-xl text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Buy eSIM for your next destination
                    </h2>
                </div>

                <div className="relative">
                    <div className="flex w-max animate-country-scroll gap-3 hover:[animation-play-state:paused]">
                        {[...countries, ...countries].map((country, index) => (
                            <Link
                                key={`${country.href}-${index}`}
                                href={country.href}
                                className="group flex w-[230px] shrink-0 items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
                            >
                                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gray-50 text-3xl shadow-sm">
                                    {country.flag}
                                </span>

                                <div className="min-w-0 flex-1">
                                    <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                                        Buy eSIM in
                                    </p>

                                    <p className="mt-0.5 truncate text-base font-semibold text-gray-900">
                                        {country.name}
                                    </p>
                                </div>

                                <span className="text-lg text-gray-300 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gray-900">
                                    →
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
