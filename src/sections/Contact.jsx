import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Mail, Send, Terminal, Cpu } from "lucide-react";

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "maduri15251@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-40 bg-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -mr-96 -mt-96 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] -ml-64 -mb-64 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-8 block">Connect</span>
                        <h2 className="text-6xl md:text-9xl font-black mb-12 text-foreground leading-none tracking-tighter">
                            Let's Shape The <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-flow bg-[length:200%_auto]">Incredible.</span>
                        </h2>

                        <p className="text-2xl text-muted-foreground max-w-2xl mx-auto mb-16 font-light leading-relaxed">
                            Currently orchestrating digital intelligence. Available for <span className="text-primary font-bold">collaborations</span> and research opportunities.
                        </p>

                        <div className="flex flex-col items-center gap-10">
                            <motion.button
                                onClick={handleCopy}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative px-10 py-8 bg-card border border-border rounded-[2.5rem] flex items-center gap-8 shadow-2xl hover:shadow-primary/20 transition-all w-full max-w-2xl overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform relative z-10">
                                    <Mail className="text-primary" size={32} />
                                </div>
                                <div className="text-left flex-1 relative z-10">
                                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.3em] mb-2">Primary Artifact Link</p>
                                    <p className="text-2xl md:text-3xl text-foreground font-black tracking-tight">{email}</p>
                                </div>
                                <div className="flex items-center gap-3 relative z-10">
                                    <div className="w-px h-12 bg-border" />
                                    {copied ? <Check className="text-green-500" size={28} /> : <Copy className="text-muted-foreground group-hover:text-primary transition-colors" size={28} />}
                                </div>
                            </motion.button>

                            <div className="flex flex-wrap justify-center gap-6 mt-6">
                                <a href="tel:+917780344109" className="px-8 py-5 bg-card border border-border rounded-2xl flex items-center gap-6 group hover:border-secondary/50 transition-all shadow-xl hover:-translate-y-1">
                                    <span className="text-muted-foreground font-bold text-[10px] uppercase tracking-[0.3em]">Voice Channel</span>
                                    <span className="text-xl font-black text-foreground group-hover:text-secondary transition-colors">+91 7780344109</span>
                                </a>
                            </div>
                        </div>

                        <div className="mt-40 flex justify-center">
                            <div className="flex gap-10">
                                {["Terminal", "System", "Cloud", "Logic"].map(item => (
                                    <span key={item} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/30 hover:text-primary transition-colors cursor-default">
                                        {item === "Terminal" && <Terminal size={12} />}
                                        {item === "System" && <Cpu size={12} />}
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
