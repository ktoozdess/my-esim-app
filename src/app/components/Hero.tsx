import { ReactNode } from "react";

export const Hero = ({ children }: { children: ReactNode }) => (
    <section className="relative px-4 pt-20 pb-16 text-center sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Travel the world with{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Instant eSIM
            </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-500 leading-relaxed">
            Prepaid data plans for 190+ countries with zero roaming fees. Install once via QR code
            and get online in minutes.
        </p>

        {children}
    </section>
);
