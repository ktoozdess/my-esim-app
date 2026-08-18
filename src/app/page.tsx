"use client";

import { useState, useEffect } from "react";
import { PlanCard } from "@/components/PlanCard";
import { Hero } from "./components/Hero";
import { Banner } from "./components/Banner";
import { NoData } from "./components/NoData";

interface ESimPackageFromApi {
    packageCode: string;
    packageName: string;
    locationCode: string;
    dataAmount: number;
    duration: number;
    price: number;

    volume?: number;
    name?: string;
    locationName?: string;
    regionCode?: string;
    id?: string;
}

export default function HomePage() {
    const [plans, setPlans] = useState<ESimPackageFromApi[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [visibleCount, setVisibleCount] = useState(20);

    useEffect(() => {
        async function fetchPlans() {
            try {
                setIsLoading(true);
                const response = await fetch("/api/get-plans");

                if (!response.ok) {
                    throw new Error("Failed to load destination plans");
                }

                const json = await response.json();

                const packageList = json?.obj?.packageList || [];
                setPlans(packageList);
            } catch (err: unknown) {
                const message = err instanceof Error ? err.message : "An unexpected error occurred";
                setError(message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchPlans();
    }, []);

    const filteredPlans = plans.filter((plan) => {
        const query = searchQuery.toLowerCase();

        const name = (plan.packageName || plan.name || "").toLowerCase();
        const code = (plan.locationCode || plan.packageCode || "").toLowerCase();

        return name.includes(query) || code.includes(query);
    });

    const displayedPlans = filteredPlans.slice(0, visibleCount);

    return (
        <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans antialiased">
            <Hero>
                <div className="mx-auto mt-10 max-w-md">
                    <div className="relative rounded-2xl shadow-md shadow-indigo-100/50">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                            <span className="text-slate-400 text-lg">🔍</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Where are you going next? e.g. France, Japan..."
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setVisibleCount(20);
                            }}
                            className="block w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-base placeholder-slate-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition duration-200"
                        />
                    </div>
                </div>
            </Hero>

            <section id="destinations" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200/60 pb-5 mb-8">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                        Available Data Packages
                    </h2>
                    {!isLoading && !error && filteredPlans.length > 0 && (
                        <p className="text-sm text-slate-500 mt-1 md:mt-0">
                            Showing {filteredPlans.length} plans
                        </p>
                    )}
                </div>

                {isLoading && (
                    <div className="flex flex-col items-center justify-center py-20 space-y-4">
                        <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent"></div>
                        <p className="text-sm font-medium text-slate-400 animate-pulse">
                            Fetching global rates...
                        </p>
                    </div>
                )}

                {error && (
                    <div className="mx-auto max-w-md rounded-2xl bg-red-50 p-4 text-center text-sm font-medium text-red-700 border border-red-100">
                        ⚠️ {error}. Please try again later.
                    </div>
                )}

                {!isLoading && !error && filteredPlans.length === 0 && <NoData />}

                {!isLoading && !error && filteredPlans.length > 0 && (
                    <>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {displayedPlans.map((plan) => {
                                const dummyVariantId = "1867183";

                                const bytesAmount = plan.volume || plan.dataAmount || 0;
                                const displayData =
                                    bytesAmount >= 1073741824
                                        ? `${Math.round(bytesAmount / 1073741824)} GB`
                                        : `${Math.round(bytesAmount / 1048576)} MB`;

                                const wholesalePriceInUsd = plan.price / 10000;
                                const retailPrice = wholesalePriceInUsd * 1.4;

                                return (
                                    <PlanCard
                                        key={plan.packageCode}
                                        esimPackageCode={plan.packageCode || ""}
                                        variantId={dummyVariantId}
                                        countryName={plan.packageName}
                                        locationCode={plan.locationCode}
                                        dataAmount={displayData}
                                        durationDays={plan.duration}
                                        price={retailPrice}
                                        speed="5G"
                                    />
                                );
                            })}
                        </div>

                        {visibleCount < filteredPlans.length && (
                            <div className="mt-12 flex justify-center">
                                <button
                                    onClick={() => setVisibleCount((prev) => prev + 20)}
                                    className="px-8 py-3.5 bg-white border border-slate-200 text-slate-700 font-semibold rounded-2xl hover:bg-slate-50 hover:border-slate-300 active:scale-[0.98] transition-all duration-200 shadow-sm text-sm"
                                >
                                    Load More Plans
                                </button>
                            </div>
                        )}
                    </>
                )}
            </section>

            <Banner />
        </div>
    );
}
