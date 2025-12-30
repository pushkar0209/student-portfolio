import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";

const Experience = () => {
    return (
        <section id="experience" className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 w-full h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -mt-64" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Professional Growth</span>
                        <h2 className="text-5xl md:text-7xl font-bold mb-8 text-slate-900 dark:text-white tracking-tighter">Experience & Credits</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8 rounded-full" />
                        <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
                            Chronicles of my immersion into industry standards and research laboratories.
                        </p>
                    </motion.div>
                </div>

                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Experience Timeline */}
                    <div className="space-y-12">
                        <h3 className="text-3xl font-black mb-12 flex items-center gap-4 text-slate-900 dark:text-white tracking-tight">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center"><Briefcase className="text-primary" size={20} /></div>
                            Internships & Training
                        </h3>
                        <div className="space-y-12 relative before:absolute before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary/50 before:via-slate-200 dark:before:via-slate-800 before:to-transparent">
                            {[
                                {
                                    title: "AI Development Intern",
                                    company: "Innovation Lab",
                                    date: "June 2024 - Aug 2024",
                                    desc: "Spearheaded the integration of RAG-based systems for predictive analytics in real-time supply chains.",
                                    tags: ["Python", "TensorFlow", "FastAPI"]
                                },
                                {
                                    title: "Full Stack Trainee",
                                    company: "Tech Academy",
                                    date: "Jan 2024 - May 2024",
                                    desc: "Mastered high-concurrency architecture and developed modular enterprise-level microservices.",
                                    tags: ["React", "Go", "Docker"]
                                }
                            ].map((job, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative pl-16 group"
                                >
                                    <div className="absolute left-0 top-1.5 w-10 h-10 rounded-full glass-panel border-primary/50 flex items-center justify-center z-10 group-hover:scale-125 transition-all">
                                        <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_hsla(var(--primary)/0.8)]" />
                                    </div>
                                    <div className="p-8 rounded-[2.5rem] glass-card border-slate-200 dark:border-white/5 hover:border-primary/50">
                                        <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                                            <div>
                                                <h4 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">{job.title}</h4>
                                                <p className="text-primary font-bold tracking-wider text-sm uppercase">{job.company}</p>
                                            </div>
                                            <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/5 px-4 py-2 rounded-full border border-slate-200 dark:border-white/10 tracking-widest uppercase">
                                                {job.date}
                                            </span>
                                        </div>
                                        <p className="text-slate-500 dark:text-slate-400 mb-8 font-light leading-relaxed text-lg">{job.desc}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {job.tags.map(tag => (
                                                <span key={tag} className="text-[9px] font-black px-3 py-1.5 rounded-lg bg-primary/5 text-primary border border-primary/10 tracking-tighter uppercase">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications & Awards */}
                    <div className="space-y-12">
                        <h3 className="text-3xl font-black mb-12 flex items-center gap-4 text-slate-900 dark:text-white tracking-tight">
                            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center"><Award className="text-accent" size={20} /></div>
                            Credentials & Awards
                        </h3>
                        <div className="grid gap-6">
                            {[
                                { title: "Global AI Hackathon Finalist", organization: "TechCommunity", year: "2024" },
                                { title: "AWS Certified Cloud Practitioner", organization: "Amazon Web Services", year: "2024" },
                                { title: "Deep Learning Specialization", organization: "Coursera / DeepLearning.AI", year: "2023" },
                                { title: "Full Stack Excellence Award", organization: "University Dept", year: "2023" }
                            ].map((cert, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-6 p-6 rounded-[2rem] glass-card border-slate-200 dark:border-white/5 hover:border-accent/40 group cursor-default"
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all">
                                        <Award className="text-accent" size={32} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-accent transition-colors tracking-tight">{cert.title}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-500 font-bold uppercase tracking-widest">{cert.organization}</p>
                                    </div>
                                    <span className="text-lg font-black text-slate-300 dark:text-slate-700">{cert.year}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
