import Link from "next/link";

export default function Navbar() {
    return (
        <header className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-xl font-black tracking-tight text-slate-900 flex items-center gap-2"
                >
                    <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                        Blossom
                    </span>
                </Link>

                <nav className="flex items-center gap-6">
                    <Link
                        href="/"
                        className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
                    >
                        Store
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
                    >
                        About
                    </Link>
                </nav>
            </div>
        </header>
    );
}
