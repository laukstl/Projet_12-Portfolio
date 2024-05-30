'use client';

import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const LogoEtBackground = () => {
    const x = useMotionValue(0);
    const xInput = [-100, 0, 100];
    const background = useTransform(x, xInput, [
        "linear-gradient(180deg, #cc2222 0%, rgb(200, 200, 200) 100%)",
        "linear-gradient(180deg, #eeeeee 0%, rgb(220, 220, 255) 100%)",
        "linear-gradient(180deg, rgb(220, 220, 255) 0%, rgb(100, 100, 255) 100%)"
    ]);

    const handleDragStart = (event: any) => {
        event.preventDefault();
    };

    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full -z-10">
                <motion.div 
                    className="absolute top-0 left-0 w-full h-full opacity-30" 
                    style={{ background }} 
                />
            </div>
            <div className="flex justify-center items-center">
                <motion.div
                    className="box"
                    style={{ x }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                >
                    <img
                        src="/logo.webp"
                        alt="Logo L.C."
                        className="min-w-[250px] w-[250px] min-h-[250px] h-[250px] transition-transform"
                        onDragStart={handleDragStart}
                    />
                </motion.div>
            </div>
        </div>
    );
}

export default LogoEtBackground;
