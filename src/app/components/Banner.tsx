export const Banner = () => (
    <section id="features" className="bg-slate-900 text-white py-16 mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-4">
                <span className="text-3xl mb-4">🚀</span>
                <h3 className="text-lg font-bold">1-Minute Delivery</h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    No physical SIM swapping required. Scan your custom QR code and you are
                    connected immediately.
                </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
                <span className="text-3xl mb-4">⚡</span>
                <h3 className="text-lg font-bold">Top-Tier Networks</h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    Enjoy premium high-speed 4G/5G coverage powered by leading native local telecom
                    operators.
                </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
                <span className="text-3xl mb-4">🛡️</span>
                <h3 className="text-lg font-bold">Zero Hidden Fees</h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    100% prepaid plans. Control exactly how much you spend with absolutely no
                    post-trip surprises.
                </p>
            </div>
        </div>
    </section>
);
