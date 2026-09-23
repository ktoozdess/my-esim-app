import { Suspense } from "react";

import { HomePage } from "@/modules/app-shell/pages/home/ui";

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
        </Suspense>
    );
}
