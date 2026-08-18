import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-slate-100 bg-slate-50 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                <div>&copy; {new Date().getFullYear()} Blossom eSIM. All rights reserved.</div>

                <div className="flex gap-6 font-medium">
                    <Link href="/about" className="hover:text-slate-900 transition-colors">
                        About Us
                    </Link>
                    <a
                        href="mailto:tem.group.prilavok@gmail.com"
                        className="hover:text-slate-900 transition-colors"
                    >
                        Support
                    </a>
                </div>
            </div>
        </footer>
    );
}
