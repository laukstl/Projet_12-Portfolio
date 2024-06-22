import { Inter, Roboto, Montserrat } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const robotoThin = Roboto({
    subsets: ["latin"], weight: "100",
    display: 'swap', variable: '--font-roboto-thin',
});

export const montBlack = Montserrat({
    subsets: ["latin"], weight: "900",
    display: 'swap', variable: '--font-mont-black',
});

export const montExtrabold = Montserrat({
    subsets: ["latin"], weight: "800",
    display: 'swap', variable: '--font-mont-extrabold',
});

export const montSemiBold = Montserrat({
    subsets: ["latin"], weight: "600",
    display: 'swap', variable: '--font-mont-semibold',
});

export const montLight = Montserrat({
    subsets: ["latin"], weight: "300",
    display: 'swap', variable: '--font-mont-light',
});
