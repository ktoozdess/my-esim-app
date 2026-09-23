import Link from "next/link";

export default function Footer() {
    return (
        <footer className="mt-auto border-t border-slate-100 bg-slate-50">
            <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-8 text-sm text-slate-500 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-4 text-center font-medium sm:flex-row sm:gap-6">
                    <div className="flex gap-6">
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/refund">Refund</Link>
                        <Link href="/terms-of-service">Terms of Service</Link>
                    </div>

                    <div className="flex gap-6">
                        <Link href="/about">About Us</Link>
                        <a href="mailto:tem.group.prilavok@gmail.com">Support</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
