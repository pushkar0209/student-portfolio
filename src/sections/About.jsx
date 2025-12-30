import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Database, Globe, Cpu } from "lucide-react";

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section id="about" className="py-32 relative overflow-hidden bg-background">
            {/* Background Decoration */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div ref={ref} className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid lg:grid-cols-2 gap-20 items-stretch"
                >
                    {/* Left Column: Image & visual */}
                    <motion.div variants={itemVariants} className="relative group">
                        <div className="relative z-10 rounded-[2rem] overflow-hidden border border-border shadow-2xl h-full min-h-[500px]">
                            <img
                                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop"
                                alt="Pushkar"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

                            <div className="absolute bottom-0 left-0 p-8">
                                <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-2 backdrop-blur-md border border-primary/20">
                                    Visionary
                                </span>
                                <h3 className="text-3xl font-bold text-white mb-2">Pushkar Sagar Madhuri</h3>
                                <p className="text-slate-300 font-light">Crafting the future of digital interaction.</p>
                            </div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-6 -right-6 bg-card border border-border p-4 rounded-2xl shadow-xl z-20"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                    <Code size={20} />
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Status</div>
                                    <div className="text-sm font-bold text-foreground">Building Next-Gen</div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <div className="flex flex-col justify-center">
                        <motion.div variants={itemVariants}>
                            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-foreground leading-[1.1]">
                                Engineering <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Complex Systems</span>
                                <br /> into Simplicity.
                            </h2>
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-6 text-lg text-muted-foreground font-light mb-12 leading-relaxed">
                            <p>
                                I am an architect of digital experiences, specializing in converting abstract concepts into robust, scalable applications. My focus lies at the intersection of <span className="text-primary font-medium">Artificial Intelligence</span> and <span className="text-secondary font-medium">Full-Stack Development</span>.
                            </p>
                            <p>
                                Every line of code I write is driven by a desire to create software that is not just functional, but intuitive and transformative.
                            </p>
                        </motion.div>

                        {/* Bento Grid Stats */}
                        <motion.div variants={containerVariants} className="grid grid-cols-2 gap-4">
                            {[
                                { label: "Projects", value: "15+", icon: Database, color: "text-primary" },
                                { label: "Technologies", value: "20+", icon: Globe, color: "text-secondary" },
                                { label: "Experience", value: "3 Yrs", icon: Code, color: "text-accent" },
                                { label: "Commitment", value: "100%", icon: Cpu, color: "text-purple-400" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                    className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors shadow-sm cursor-default group"
                                >
                                    <stat.icon className={`w-8 h-8 ${stat.color} mb-4 opacity-70 group-hover:opacity-100 transition-opacity`} />
                                    <div className="text-3xl font-black text-foreground tracking-tight mb-1">{stat.value}</div>
                                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
