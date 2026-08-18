"use client";

import React, { useState } from "react";

interface LemonSqueezyWindow extends Window {
    LemonSqueezy?: {
        Url: {
            Open: (url: string) => void;
        };
    };
}

interface PlanCardProps {
    variantId: string;
    esimPackageCode: string;
    countryName: string;
    locationCode: string;
    dataAmount: string;
    durationDays: number;
    price: number;
    speed?: "4G" | "5G";
}

interface InvoiceApiResponse {
    checkoutUrl?: string;
    error?: string;
}

export const PlanCard: React.FC<PlanCardProps> = ({
    variantId,
    esimPackageCode,
    countryName,
    locationCode,
    dataAmount,
    durationDays,
    price,
    speed = "5G",
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCryptoLoading, setIsCryptoLoading] = useState(false);

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const customData = encodeURIComponent(JSON.stringify({ packageCode: variantId }));
    const checkoutUrl = `https://blossom4.lemonsqueezy.com/checkout/buy/${variantId}?embed=1&passthrough=${customData}`;

    const validateEmail = (input: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!input) {
            setEmailError("Email is required for eSIM delivery");
            return false;
        }
        if (!regex.test(input)) {
            setEmailError("Please enter a valid email address");
            return false;
        }
        setEmailError("");
        return true;
    };

    const handleLemonSqueezyPurchase = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsModalOpen(false);

        const customWindow = window as unknown as LemonSqueezyWindow;

        if (customWindow.LemonSqueezy?.Url) {
            customWindow.LemonSqueezy.Url.Open(checkoutUrl);
        } else {
            window.open(checkoutUrl, "_blank");
        }
    };

    const handleCryptoPurchase = async () => {
        if (!validateEmail(email)) return;

        try {
            setIsCryptoLoading(true);

            const response = await fetch("/api/create-crypto-invoice", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    esimPackageCode: esimPackageCode,
                    price: price,
                    email: email.trim().toLowerCase(),
                }),
            });

            const data = (await response.json()) as InvoiceApiResponse;

            if (data.checkoutUrl) {
                window.location.href = data.checkoutUrl;

                sessionStorage.setItem("payment_initiated", "true");
            } else {
                alert(data.error || "Failed to initiate crypto payment. Try again.");
                setIsCryptoLoading(false);
            }
        } catch {
            alert("Network error while generating crypto invoice.");
            setIsCryptoLoading(false);
        }
    };

    return (
        <>
            <div className="group relative bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-0" />

                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                                {locationCode}
                            </span>
                            <h3 className="text-2xl font-extrabold text-slate-800 tracking-tight mt-0.5">
                                {countryName}
                            </h3>
                        </div>
                        <span
                            className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                                speed === "5G"
                                    ? "bg-emerald-50 text-emerald-700"
                                    : "bg-blue-50 text-blue-700"
                            }`}
                        >
                            {speed}
                        </span>
                    </div>

                    <div className="mb-6">
                        <span className="text-4xl font-black text-slate-900">
                            ${price.toFixed(2)}
                        </span>
                        <span className="text-sm font-medium text-slate-400 ml-1">one-time</span>
                    </div>

                    <hr className="border-slate-100 my-4" />

                    <div className="space-y-3 my-6">
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-500 font-medium">Data allowance</span>
                            <span className="font-bold text-slate-800 bg-slate-50 px-2.5 py-1 rounded-lg">
                                {dataAmount}
                            </span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-500 font-medium">Validity</span>
                            <span className="font-bold text-slate-800 bg-slate-50 px-2.5 py-1 rounded-lg">
                                {durationDays} {durationDays === 1 ? "day" : "days"}
                            </span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-slate-500 font-medium">Delivery</span>
                            <span className="font-medium text-indigo-600">Instant QR Code</span>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className="relative z-10 w-full text-center bg-slate-900 text-white font-semibold py-3.5 px-4 rounded-2xl hover:bg-indigo-600 active:scale-[0.98] transition-all duration-200 shadow-sm group-hover:shadow-indigo-100 cursor-pointer"
                >
                    Buy eSIM
                </button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                    <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative">
                        <button
                            onClick={() => {
                                setIsModalOpen(false);
                                setEmailError("");
                            }}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-50 transition-colors cursor-pointer"
                        >
                            ✕
                        </button>

                        <div className="mb-5">
                            <h3 className="text-xl font-bold text-slate-900">Checkout Options</h3>
                            <p className="text-sm text-slate-500 mt-1">
                                Provide your delivery info and choose payment method
                            </p>
                        </div>

                        <div className="mb-5">
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                                Delivery Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setEmailError("");
                                }}
                                onBlur={(e) => validateEmail(e.target.value)}
                                placeholder="your-email@example.com"
                                className={`w-full px-4 py-3 rounded-xl border bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                                    emailError
                                        ? "border-rose-400 focus:ring-rose-100 bg-rose-50/20"
                                        : "border-slate-200 focus:ring-indigo-100 focus:border-indigo-500"
                                }`}
                            />
                            {emailError && (
                                <span className="block text-xs font-semibold text-rose-500 mt-1.5 ml-1 animate-pulse">
                                    ⚠️ {emailError}
                                </span>
                            )}
                        </div>

                        <div className="space-y-3">
                            <button
                                onClick={handleCryptoPurchase}
                                disabled={isCryptoLoading}
                                className={`w-full flex items-center justify-between p-4 bg-slate-50 border rounded-2xl transition-all duration-200 group/btn text-left cursor-pointer ${
                                    emailError
                                        ? "opacity-50 border-slate-200"
                                        : "border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/30"
                                }`}
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="text-2xl">🪙</div>
                                    <div>
                                        <span className="block font-bold text-slate-800">
                                            Pay with Crypto
                                        </span>
                                        <span className="block text-xs text-slate-500">
                                            USDT, BTC, ETH via NOWPayments
                                        </span>
                                    </div>
                                </div>
                                <span className="text-indigo-600 font-medium text-sm group-hover/btn:translate-x-1 transition-transform">
                                    {isCryptoLoading ? "..." : "→"}
                                </span>
                            </button>

                            <button
                                onClick={handleLemonSqueezyPurchase}
                                disabled={true}
                                className="w-full flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-2xl transition-all duration-200 group/btn text-left cursor-not-allowed opacity-60"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="text-2xl opacity-70 filter grayscale">💳</div>
                                    <div>
                                        <span className="block font-bold text-slate-500">
                                            Credit Card / Apple Pay
                                        </span>
                                        <span className="block text-xs text-amber-600 font-medium mt-0.5">
                                            Temporarily unavailable — Will be available later ⏳
                                        </span>
                                    </div>
                                </div>
                                <span className="text-slate-400 font-medium text-sm">→</span>
                            </button>
                        </div>

                        <button
                            onClick={() => {
                                setIsModalOpen(false);
                                setEmailError("");
                            }}
                            className="w-full text-center text-sm font-semibold text-slate-400 hover:text-slate-600 mt-5 pt-1 transition-colors cursor-pointer"
                        >
                            Nevermind, go back
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
