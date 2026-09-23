"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconHome, IconInfoCircle, IconDeviceSim } from "@tabler/icons-react";

const navigationItems = [
    {
        label: "Home",
        path: "/",
        icon: IconHome,
    },
    {
        label: "About",
        path: "/about",
        icon: IconInfoCircle,
    },
    {
        label: "My eSIMs",
        path: "/my-esims",
        icon: IconDeviceSim,
    },
];

export default function BottomNavigation() {
    const pathname = usePathname();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white md:hidden">
            <div className="grid grid-cols-3">
                {navigationItems.map((item) => {
                    const isActive = pathname === item.path;
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`flex min-h-16 flex-col items-center justify-center gap-1 ${
                                isActive ? "text-black" : "text-gray-400"
                            }`}
                        >
                            <Icon size={22} stroke={isActive ? 2.2 : 1.8} />

                            <span className="text-xs">{item.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
