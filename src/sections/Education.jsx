import React from "react";
import { motion } from "framer-motion";

const Education = () => {
    return (
        <section id="education" className="py-32 relative bg-slate-50 dark:bg-slate-900 overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -mr-64 -mb-64" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Academic Foundation</span>
                        <h2 className="text-5xl md:text-7xl font-bold mb-8 text-slate-900 dark:text-white tracking-tighter">Scholastic Records</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
                    </motion.div>
                </div>

                <div className="max-w-5xl mx-auto space-y-10">
                    {/* Main Degree */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-10 md:p-16 rounded-[3rem] glass-card border-slate-200 dark:border-white/10"
                    >
                        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 gap-8">
                            <div className="max-w-2xl">
                                <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight leading-none">Bachelor of Technology</h3>
                                <p className="text-2xl text-primary font-bold mb-4 tracking-tight">AI & Machine Learning Specialist</p>
                                <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">Malla Reddy Engineering College And Management Sciences</p>
                            </div>
                            <div className="px-8 py-3 glass-panel border-primary/20 text-primary rounded-2xl font-black tracking-widest text-lg">
                                2023 - 2027
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-16 pt-12 border-t border-slate-200 dark:border-white/5">
                            <div className="group">
                                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-primary" /> Parallel Degree
                                </h4>
                                <div className="p-8 rounded-[2rem] glass-card border-slate-100 dark:border-white/5 hover:border-primary/40 transition-all">
                                    <p className="text-xl font-black text-slate-800 dark:text-slate-200 mb-2">IIT Jodhpur</p>
                                    <p className="text-primary font-bold text-sm tracking-widest uppercase">Applied AI and Data Science</p>
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="text-xs font-bold text-slate-400">Class of 2028</span>
                                        <span className="text-[10px] font-black text-primary bg-primary/10 px-3 py-1 rounded-full uppercase">On Track</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-black text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-accent" /> Scholastic Merit
                                </h4>
                                <ul className="space-y-5">
                                    {[
                                        { text: "Departmental Distinction (Top 5%)", color: "bg-primary" },
                                        { text: "Lead ML Research Associate", color: "bg-accent" },
                                        { text: "Technical Innovations Guild Lead", color: "bg-secondary" }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-slate-500 dark:text-slate-400 font-bold text-sm group">
                                            <div className={`w-2 h-2 rounded-sm ${item.color} group-hover:scale-150 group-hover:rotate-45 transition-all`} />
                                            {item.text.toUpperCase()}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
