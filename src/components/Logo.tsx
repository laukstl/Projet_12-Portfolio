'use client';

import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

import Image from "next/image";
import logo from "../../public/logo.webp";

interface ColorPropsType {
    colorsLight: any;
    colorsDark: any;
}

const LogoEtBackground = ({ colorsLight, colorsDark }: ColorPropsType) => {
    const x = useMotionValue(0);
    const xInput = [-100, 0, 100];
    const background = useTransform(x, xInput, colorsLight);
    const backgroundDark = useTransform(x, xInput, colorsDark);

    const handleDragStart = (event: any) => {
        event.preventDefault();
    };

    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <motion.div
                    className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-60"
                    style={{ background: background }}
                />
                <motion.div
                    // className="absolute top-0 left-0 w-full h-full opacity-0" 
                    className="absolute top-0 left-0 w-full h-full opacity-0 dark:opacity-60"
                    style={{ background: backgroundDark }}
                />
            </div>
            <div className="flex justify-center items-center dark:text-white">
                <motion.div
                    className="box"
                    style={{ x }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                >
                    <Image
                        src={logo}
                        alt="Logo L.C."
                        className="min-w-64 w-64 min-h-64 h-64 transition-transform dark:invert transition-scale duration-300 ease hover:scale-105"
                        onDragStart={handleDragStart}
                        priority
                    />
                </motion.div>
            </div>
        </div>
    );
}

export default LogoEtBackground;
