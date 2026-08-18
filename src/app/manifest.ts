import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Blossom eSIM Store",
        short_name: "Blossom",
        description:
            "Purchase high-speed international travel eSIM profiles anonymously using cryptocurrency.",
        start_url: "/",
        display: "standalone",
        background_color: "#f8fafc",
        theme_color: "#4f46e5",
        icons: [
            {
                src: "/blossom.png",
                sizes: "192x192",
                type: "image/svg+xml",
                purpose: "any",
            },
            {
                src: "/blossom.png",
                sizes: "512x512",
                type: "image/svg+xml",
                purpose: "maskable",
            },
        ],
    };
}
