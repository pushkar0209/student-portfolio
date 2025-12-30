import React, { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import HeroBackground from "../components/HeroBackground";

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <HeroBackground />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 perspective-1000">
                <motion.div
                    style={{ y: yText, opacity: opacityText, rotateX, rotateY, transformStyle: "preserve-3d" }}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="flex flex-col items-center justify-center text-center cursor-default"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, z: -100 }}
                        animate={{ scale: 1, opacity: 1, z: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8 inline-block transform-style-3d group"
                    >
                        <span className="relative py-2 px-6 rounded-full border border-primary/30 bg-primary/10 text-primary font-bold text-sm tracking-[0.2em] uppercase backdrop-blur-md overflow-hidden transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105 inline-block">
                            <span className="relative z-10">Available for Opportunities</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                        </span>
                    </motion.div>

                    <h1 className="text-6xl md:text-9xl font-bold mb-8 tracking-tighter text-foreground leading-tight transform-style-3d">
                        <motion.span
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="block"
                        >
                            Hi, I'm <span className="text-primary hover:text-accent transition-colors duration-300">Pushkar</span>
                        </motion.span>
                        <motion.span
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-flow bg-[length:200%_auto] pb-4"
                        >
                            Sagar Madhuri
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-muted-foreground max-w-2xl mx-auto text-xl md:text-2xl font-light mb-12 leading-relaxed transform-style-3d translate-z-10"
                    >
                        Computer Science Student & <span className="text-secondary font-semibold">AI/ML Explorer</span>.
                        <br className="hidden md:block" />
                        Crafting intelligent solutions with deep learning and modern web technologies.
                    </motion.p>

                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-6 transform-style-3d translate-z-20"
                    >
                        <a
                            href="#projects"
                            className="group relative px-8 py-4 bg-foreground text-background rounded-full font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:translate-y-0"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Explore Work <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity blur-md -z-10" />
                        </a>

                        <div className="flex items-center gap-4">
                            {[
                                { icon: Github, href: "https://github.com/pushkar0209" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/pushkar-sagar-madhuri-003693330/" },
                                { icon: Mail, href: "mailto:pushkar@example.com" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-full border border-border bg-background/50 hover:bg-background backdrop-blur-md hover:border-primary/50 group transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
                                >
                                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs tracking-widest text-muted-foreground uppercase opacity-50">Scroll</span>
                    <div className="w-[30px] h-[50px] border-2 border-muted-foreground/30 rounded-full flex justify-center p-2 backdrop-blur-sm">
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                            className="w-1.5 h-1.5 bg-primary rounded-full"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
