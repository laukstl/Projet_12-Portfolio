import type { Metadata } from "next";
// import Head from "next/head";

import { Inter, Roboto, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const robotoThin = Roboto({
    subsets: ["latin"], weight: "100",
    display: 'swap', variable: '--font-roboto-thin',
});

const montBlack = Montserrat({
    subsets: ["latin"], weight: "900",
    display: 'swap', variable: '--font-mont-black',
});

const montExtrabold = Montserrat({
    subsets: ["latin"], weight: "800",
    display: 'swap', variable: '--font-mont-extrabold',
});

const montSemiBold = Montserrat({
    subsets: ["latin"], weight: "600",
    display: 'swap', variable: '--font-mont-semibold',
});

const montLight = Montserrat({
    subsets: ["latin"], weight: "300",
    display: 'swap', variable: '--font-mont-light',
});

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Generated with React / NextJS / Tailwind",
    alternates: {
        canonical: './'
    },
    openGraph: {
        title: 'Portfolio',
        description: 'project 12: Portfolio',
        images: './card.jpg',
        type: 'website',
        url: './'
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">

            <body className={`
                ${inter.className}
                ${robotoThin.variable}

                ${montBlack.variable}
                ${montExtrabold.variable}
                ${montSemiBold.variable}
                ${montLight.variable}

                `}>

                {/* Logofix : */}
                <div className="overflow-hidden w-full flex justify-center">
                    {children}
                </div>
            </body>
        </html>
    );
}
