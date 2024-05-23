'use client';

import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement | null;

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

                    const gradient = context.createLinearGradient(0, 0, width, height);
                    gradient.addColorStop(0, `rgb(200, 200, 200)`);
                    gradient.addColorStop(0.5 + 0.5 * Math.sin(time), `rgb(220, 220, 255)`);
                    gradient.addColorStop(1, `rgb(255, 255, 255)`);

                    context.fillStyle = gradient;
                    context.fillRect(0, 0, width, height);

                    time += 0.01;
                    requestAnimationFrame(drawGradient);
                };

                drawGradient();
            }
        }
    }, []);

    return (
        <canvas ref={canvasRef} className="w-full h-full fixed top-0 left-0"></canvas>
    );
};

export default AnimatedBackground;
