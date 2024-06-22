import type { Config } from "tailwindcss";

const config: Config = {

    darkMode: 'selector', // pour pouvoir utiliser la class dark pour activer le dark mode

    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        extend: {
            fontFamily: {
                robotoThin: ['var(--font-roboto-thin)'],

                montBlack: ['var(--font-mont-black)'],
                montExtraBold: ['var(--font-mont-extrabold)'],
                montSemiBold: ['var(--font-mont-semibold)'],
                montLight: ['var(--font-mont-light)'],
            },
            // backgroundImage: {
            //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            //   "gradient-conic":
            //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            // },
            // keyframes: {
            //   wave: {
            //     '0%, 100%': { transform: 'translateY(0)' },
            //     '25%': { transform: 'translateY(-10px)' },
            //     '50%': { transform: 'translateY(10px)' },
            //     '75%': { transform: 'translateY(-10px)' },
            //   },
            // },
            // animation: {
            //   wave: 'wave 2s infinite',
            // },
        },
    },
    plugins: [

    ],
};

export default config;
