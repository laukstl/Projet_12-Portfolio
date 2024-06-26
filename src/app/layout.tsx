import type { Metadata } from "next";
import Script from "next/script";
import Provider from '../components/Provider';
import { inter, robotoThin, montBlack, montExtrabold, montSemiBold, montLight } from "./fonts";
import "./globals.css";
import { LocalBusiness, WithContext } from "schema-dts";


const descriptionText = "Découvrez le portfolio de Laurent C., développeur web spécialisé en React, NextJS et Tailwind. Explorez mes projets récents et contactez-moi!";
const titleText = "Portfolio de Laurent C.";
const urlBase = '/';

export const metadata: Metadata = {
    title: titleText,
    description: descriptionText,
    metadataBase: new URL('https://p12.kstl.fr'),

    alternates: {
        canonical: urlBase,
    },

    openGraph: {
        title: titleText,
        description: descriptionText,
        images: [
            {
                url: `${urlBase}card.jpg`,
                alt: 'Carte de visite',
            },
        ],
        type: 'website',
        url: urlBase,
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

    const jsonLd: WithContext<LocalBusiness> = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        address: {
            "@type": "PostalAddress",
            "addressLocality": "Bordeaux",
            "postalCode": "33001",
            "streetAddress": "10, rue du bout de la ville"
          },
        name: "Laurent C. Intégrateur Web",
        description: descriptionText,
        email: 'laurent@kstl.fr',
        founder: 'Laurent C.',
        foundingDate: '2024',
        foundingLocation: 'Paris, France',
        logo : './logo.webp',
        telephone: "(+33) 0123-4567",
        url: "https://p12.kstl.fr"
    }

    return (
        <>
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
           />

            <html lang="en" className="scroll-smooth">
                <body className={`
                ${inter.className}
                ${robotoThin.variable}
                ${montBlack.variable}
                ${montExtrabold.variable}
                ${montSemiBold.variable}
                ${montLight.variable}
                `}>
                    <Provider>
                        <div className="overflow-hidden w-full flex justify-center text-black dark:text-white transition-colors duration-300">
                            {children}
                        </div>
                    </Provider>
                </body>
            </html>
        </>
    );
}
