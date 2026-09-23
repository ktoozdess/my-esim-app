import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
            <span className="text-8xl font-bold">404</span>

            <h1 className="mt-4 text-2xl font-semibold">Page not found</h1>

            <p className="mt-2 text-gray-500">The page you are looking for doesn&apos;t exist.</p>

            <Link
                href="/"
                className="mt-6 rounded-lg bg-black px-5 py-3 text-sm font-medium text-white"
            >
                Go home
            </Link>
        </main>
    );
}
