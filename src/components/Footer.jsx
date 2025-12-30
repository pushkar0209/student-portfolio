import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative py-20 overflow-hidden bg-background">
            <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                <div className="p-12 border border-border rounded-[3rem] flex flex-col md:flex-row justify-between items-center gap-12 bg-card/50 backdrop-blur-sm">
                    <div className="text-center md:text-left">
                        <h3 className="text-3xl font-black text-foreground tracking-tighter mb-4">
                            Pushkar<span className="text-primary">.</span>
                        </h3>
                        <p className="text-muted-foreground font-medium tracking-tight">
                            Synthesizing the future through <br /> cognitive engineering.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        {[
                            { icon: Github, href: "https://github.com/pushkar0209" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/pushkar-sagar-madhuri-003693330/" },
                            { icon: Mail, href: "mailto:maduri15251@gmail.com" }
                        ].map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-14 h-14 rounded-2xl border border-border bg-secondary/5 flex items-center justify-center hover:border-primary/50 group transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/20"
                            >
                                <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                            </a>
                        ))}
                    </div>

                    <div className="text-center md:text-right">
                        <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em] mb-4">Status Check</p>
                        <div className="flex items-center gap-3 bg-green-500/10 px-6 py-2 rounded-full border border-green-500/20">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Systems Functional</span>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center text-muted-foreground/40 text-[10px] font-bold uppercase tracking-[0.5em]">
                    &copy; {new Date().getFullYear()} Pushkar Sagar Maduri.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
