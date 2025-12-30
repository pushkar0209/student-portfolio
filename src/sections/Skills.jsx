import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Database, Cpu, Brain, Code2, Terminal, Layers } from "lucide-react";

const skillCategories = [
    {
        title: "Artificial Intelligence",
        icon: Brain,
        skills: [
            { name: "Machine Learning", level: 90 },
            { name: "Deep Learning", level: 85 },
            { name: "NLP", level: 80 },
            { name: "Computer Vision", level: 75 },
            { name: "Neural Networks", level: 85 }
        ],
        color: "from-indigo-500 to-purple-500",
        shadow: "shadow-indigo-500/20"
    },
    {
        title: "Data Science",
        icon: Database,
        skills: [
            { name: "Data Analysis", level: 95 },
            { name: "Predictive Modeling", level: 85 },
            { name: "Big Data Tools", level: 70 },
            { name: "Statistical Analysis", level: 90 },
            { name: "Visualization", level: 92 }
        ],
        color: "from-sky-500 to-blue-500",
        shadow: "shadow-sky-500/20"
    },
    {
        title: "Development Stack",
        icon: Code2,
        skills: [
            { name: "React.js / Next.js", level: 95 },
            { name: "Node.js", level: 85 },
            { name: "Python", level: 98 },
            { name: "SQL / NoSQL", level: 90 },
            { name: "DevOps & CI/CD", level: 75 }
        ],
        color: "from-violet-500 to-fuchsia-500",
        shadow: "shadow-violet-500/20"
    },
    {
        title: "Core Fundamentals",
        icon: Cpu,
        skills: [
            { name: "Algorithms & DS", level: 92 },
            { name: "System Design", level: 80 },
            { name: "Cloud Computing", level: 75 },
            { name: "Software Arch", level: 85 },
            { name: "Agile", level: 90 }
        ],
        color: "from-emerald-500 to-teal-500",
        shadow: "shadow-emerald-500/20"
    }
];

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="py-32 relative overflow-hidden bg-background">
            <div ref={ref} className="container mx-auto px-4 relative z-10 max-w-7xl">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-foreground">
                            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Arsenal</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-xl font-light leading-relaxed">
                            A curated set of technologies I use to build intelligent systems.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-card border border-border rounded-[2rem] p-8 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-8 shadow-lg ${category.shadow} group-hover:scale-110 transition-transform`}>
                                <category.icon className="w-7 h-7 text-white" />
                            </div>

                            <h3 className="text-xl font-bold mb-8 text-foreground tracking-tight">{category.title}</h3>

                            <div className="space-y-6">
                                {category.skills.map((skill, si) => (
                                    <div key={si} className="group/skill">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-medium text-muted-foreground group-hover/skill:text-foreground transition-colors">{skill.name}</span>
                                            <span className="text-xs font-bold text-primary opacity-0 group-hover/skill:opacity-100 transition-opacity">{skill.level}%</span>
                                        </div>
                                        <div className="h-1.5 bg-secondary/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: 0.5 + (si * 0.1) }}
                                                className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
