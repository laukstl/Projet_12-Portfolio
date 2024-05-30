import type { Metadata } from "next";
import { Inter, Roboto, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const robotoThin = Roboto({
    subsets: ["latin"], weight: "100",
    display: 'swap', variable: '--font-roboto-thin',
});

// const robotoRegular = Roboto({
//   subsets: ["latin"], weight: "400",
//   display: 'swap', variable: '--font-roboto-rugular',
// });

// const robotoExtrabold = Roboto({
//   subsets: ["latin"], weight: "700",
//   display: 'swap', variable: '--font-roboto-extrabold',
// });

const montBlack = Montserrat({
  subsets: ["latin"], weight: "900",
  display: 'swap', variable: '--font-mont-black',
});

const montExtrabold = Montserrat({
  subsets: ["latin"], weight: "800",
  display: 'swap', variable: '--font-mont-extrabold',
});

// const montBold = Montserrat({
//   subsets: ["latin"], weight: "700",
//   display: 'swap', variable: '--font-mont-bold',
// });

const montSemiBold = Montserrat({
  subsets: ["latin"], weight: "600",
  display: 'swap', variable: '--font-mont-semibold',
});

// const montMedium = Montserrat({
//   subsets: ["latin"], weight: "500",
//   display: 'swap', variable: '--font-mont-medium',
// });

// const montRegular = Montserrat({
//   subsets: ["latin"], weight: "400",
//   display: 'swap', variable: '--font-mont-regular',
// });

const montLight = Montserrat({
  subsets: ["latin"], weight: "300",
  display: 'swap', variable: '--font-mont-light',
});

// const montExtraLight = Montserrat({
//   subsets: ["latin"], weight: "200",
//   display: 'swap', variable: '--font-mont-extralight',
// });

// const montThin = Montserrat({
//   subsets: ["latin"], weight: "100",
//   display: 'swap', variable: '--font-mont-thin',
// });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated with React / NextJS / Tailwind",
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

          flex
          items-center
          flex-col
          `}>
          {/* ${robotoRegular.variable} */}
          {/* ${robotoExtrabold.variable} */}
          
          {/* ${montBold.variable} */}
          {/* ${montMedium.variable} */}
          {/* ${montRegular.variable} */}
          {/* ${montExtraLight.variable} */}
          {/* ${montThin.variable} */}
          {children}
      </body>
    </html>
  );
}
