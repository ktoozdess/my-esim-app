export interface EsimCountry {
    slug: string;
    name: string;
    flag: string;
    description: string;
    metaDescription: string;
    highlights: string[];
    faq: {
        question: string;
        answer: string;
    }[];
}

export const esimCountries: EsimCountry[] = [
    {
        slug: "italy",
        name: "Italy",
        flag: "🇮🇹",
        description:
            "Stay connected throughout Italy with a flexible eSIM data plan. Get mobile internet for your trip without looking for a local SIM card.",
        metaDescription:
            "Buy an eSIM for Italy and stay connected throughout your trip. Get mobile data without a physical SIM card.",
        highlights: [
            "Coverage across Italy",
            "Instant eSIM activation",
            "No physical SIM card",
            "Keep your regular SIM",
        ],
        faq: [
            {
                question: "Can I use an eSIM in Italy?",
                answer: "Yes. An eSIM lets you connect to a supported mobile network in Italy without using a physical SIM card.",
            },
            {
                question: "How do I activate an Italy eSIM?",
                answer: "Purchase your eSIM, install it on your compatible device and follow the activation instructions provided with your plan.",
            },
            {
                question: "Do I need to remove my physical SIM?",
                answer: "No. On compatible devices you can keep your physical SIM active while using the eSIM for mobile data.",
            },
        ],
    },
    {
        slug: "france",
        name: "France",
        flag: "🇫🇷",
        description:
            "Get mobile data in France with an eSIM designed for travelers. Stay online in Paris and across the country without changing your physical SIM.",
        metaDescription:
            "Buy an eSIM for France and stay connected during your trip. Get mobile data without a physical SIM card.",
        highlights: [
            "Coverage across France",
            "Instant eSIM activation",
            "No physical SIM card",
            "Keep your regular SIM",
        ],
        faq: [
            {
                question: "Can I use an eSIM in France?",
                answer: "Yes. Compatible phones can connect to supported French mobile networks using an eSIM.",
            },
            {
                question: "How do I activate a France eSIM?",
                answer: "After purchasing your plan, install the eSIM on your compatible device and follow the provided activation instructions.",
            },
            {
                question: "Can I keep my existing SIM?",
                answer: "Yes. Compatible dual-SIM devices can keep your existing SIM while using the eSIM for mobile data.",
            },
        ],
    },
    {
        slug: "spain",
        name: "Spain",
        flag: "🇪🇸",
        description:
            "Stay connected in Spain with a travel eSIM. Get mobile data for your trip without visiting a store or replacing your physical SIM.",
        metaDescription:
            "Buy an eSIM for Spain and get mobile data for your trip. Easy activation and no physical SIM card required.",
        highlights: [
            "Coverage across Spain",
            "Instant eSIM activation",
            "No physical SIM card",
            "Keep your regular SIM",
        ],
        faq: [
            {
                question: "Can I use an eSIM in Spain?",
                answer: "Yes. An eSIM can provide mobile data in Spain when used with a compatible and unlocked device.",
            },
            {
                question: "How do I activate a Spain eSIM?",
                answer: "Install the eSIM on your compatible phone and follow the activation instructions included with your plan.",
            },
            {
                question: "Can I use my physical SIM at the same time?",
                answer: "Yes. Most compatible dual-SIM devices allow you to keep your physical SIM while using an eSIM for data.",
            },
        ],
    },
];
