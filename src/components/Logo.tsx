'use client';

import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface ColorPropsType {
    colorsLight: any;
    colorsDark: any;
}

const LogoEtBackground = ({ colorsLight, colorsDark }:ColorPropsType) => {
    const x = useMotionValue(0);
    const xInput = [-100, 0, 100];
    const background = useTransform(x, xInput, colorsLight);
    const backgroundDark = useTransform(x, xInput, colorsDark);

    const handleDragStart = (event:any) => {
        event.preventDefault();
    };

    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <motion.div 
                    className="absolute top-0 left-0 w-full h-full opacity-20" 
                    // className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-60" 
                    style={{ background: background }}
                />
                <motion.div 
                    className="absolute top-0 left-0 w-full h-full opacity-20" 
                    // className="absolute top-0 left-0 w-full h-full opacity-30 dark:opacity-60" 
                    style={{ background: backgroundDark }}
                />
            </div>
            <div className="flex justify-center items-center">
            {/* <div className="flex justify-center items-center dark:text-white"> */}
                <motion.div
                    className="box"
                    style={{ x }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                >
                    <img
                        src="/logo.webp"
                        alt="Logo L.C."
                        className="min-w-64 w-64 min-h-64 h-64 transition-transform"
                        // className="min-w-64 w-64 min-h-64 h-64 transition-transform dark:invert"
                        onDragStart={handleDragStart}
                    />
                </motion.div>
            </div>
        </div>
    );
}

export default LogoEtBackground;
