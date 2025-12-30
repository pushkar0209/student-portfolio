import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HeroBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden -z-10 bg-background">
            {/* Dynamic Gradient Mesh */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/30 rounded-full blur-[120px] animate-blob" />
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/30 rounded-full blur-[120px] animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-20%] left-[20%] w-[40%] h-[40%] bg-accent/30 rounded-full blur-[120px] animate-blob animation-delay-4000" />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />

            {/* Floating Particles */}
            <Particles />
        </div>
    );
};

const Particles = () => {
    const particles = Array.from({ length: 20 });

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-white/10 dark:bg-white/5 rounded-full"
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%",
                        scale: Math.random() * 0.5 + 0.5,
                        opacity: Math.random() * 0.5 + 0.2
                    }}
                    animate={{
                        y: [null, Math.random() * -100 + "%"],
                        opacity: [null, 0]
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5
                    }}
                    style={{
                        width: Math.random() * 4 + 1 + "px",
                        height: Math.random() * 4 + 1 + "px",
                    }}
                />
            ))}
        </div>
    );
};

export default HeroBackground;
