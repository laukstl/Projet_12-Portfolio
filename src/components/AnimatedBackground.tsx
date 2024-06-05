'use client';

import { useEffect, useRef } from 'react';

interface ColorPropsType {
    colorsLight: string[];
    colorsDark: string[];
}

const AnimatedBackground = ({ colorsLight, colorsDark }: ColorPropsType) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (canvas) {
            const context = canvas.getContext('2d');

            if (context) {
                const scale = window.devicePixelRatio || 1;
                const width = window.innerWidth;
                const height = window.innerHeight;
                canvas.width = width * scale;
                canvas.height = height * scale;
                context.scale(scale, scale);

                let time = 0;

                const drawGradient = () => {
                    context.clearRect(0, 0, width, height);

                    // const isDarkMode = true;
                    const isDarkMode = document.documentElement.classList.contains('dark');
                    const colors = isDarkMode ? colorsDark : colorsLight;

                    const gradient = context.createLinearGradient(0, 0, width, height);
                    gradient.addColorStop(0, colors[0]);
                    gradient.addColorStop(0.5 + 0.5 * Math.sin(time), colors[1]);
                    gradient.addColorStop(1, colors[2]);

                    context.fillStyle = gradient;
                    context.fillRect(0, 0, width, height);

                    time += 0.01;
                    requestAnimationFrame(drawGradient);
                };

                drawGradient();
            }
        }
    }, [colorsLight, colorsDark]);

    return (
        <canvas ref={canvasRef} className="w-full h-full fixed top-0 left-0 bg-white dark:bg-black"></canvas>
    );
};

export default AnimatedBackground;
