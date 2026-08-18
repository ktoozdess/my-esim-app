import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-gemini-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://blossom-esim.mobi"),

    title: {
        default: "Crypto eSIM Store | Buy Travel Mobile Data with USDT & BTC",
        template: "%s | Crypto eSIM Store",
    },
    description:
        "Purchase high-speed international travel eSIM profiles anonymously using cryptocurrency. Supports USDT, TON, BTC, and LTC. Instant QR-code delivery, no KYC, no passports required.",
    keywords: [
        "crypto esim",
        "travel esim usdt",
        "anonymous esim",
        "buy esim with telegram ton",
        "borderless mobile data",
        "no kyc esim shop",
    ],

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    openGraph: {
        title: "Crypto eSIM Store | Instant Global Internet Connection",
        description:
            "Stay connected worldwide. Buy travel eSIM plans with USDT, TON, or BTC in 30 seconds. Safe, fast, and completely anonymous.",
        url: "https://blossom-esim.mobi",
        siteName: "Crypto eSIM Store",
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Crypto eSIM Store | Buy Travel Data with Crypto",
        description:
            "No KYC, no legacy banking fees. Just scan the QR code and access high-speed 5G/4G internet in 190+ countries.",
    },

    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <Analytics />
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
