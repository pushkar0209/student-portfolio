import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, CheckCircle2, PlayCircle } from "lucide-react";
import TaskManager from "../projects/TaskManager";
import MalwareScanner from "../projects/MalwareScanner";
import HealthConnect from "../projects/HealthConnect";
import DefectInspector from "../projects/DefectInspector";

// This is a placeholder for project data. In a real app, this might come from a central data file or API.
const projectData = {
    "ai-powered-task-manager": {
        title: "AI-Powered Task Manager",
        category: "Full Stack",
        description: "A smart productivity tool that uses Natural Language Processing to categorize and prioritize tasks automatically. It helps users manage their workflow by suggesting deadlines and grouping related tasks.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
        tags: ["React", "Node.js", "TensorFlow.js", "MongoDB", "Tailwind CSS"],
        features: [
            "NLP Task Categorization",
            "Smart Deadline Suggestions",
            "Real-time Collaboration",
            "Performance Analytics Dashboard",
            "Custom Workflow Automation"
        ],
        github: "https://github.com",
        live: "https://example.com"
    },
    "malware-detection-system": {
        title: "Malware Detection System",
        category: "Machine Learning",
        description: "A security application that analyzes Android APK files to detect malicious patterns using an ensemble of machine learning models. It achieves high accuracy by combining static and dynamic analysis features.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
        tags: ["Python", "Sklearn", "Android API", "Pandas", "Random Forest"],
        features: [
            "Permission Analysis",
            "API Call Extraction",
            "Bytecode Pattern Matching",
            "Real-time Threat Monitoring",
            "Detailed Risk Reporting"
        ],
        github: "https://github.com",
        live: "https://example.com"
    },
    "healthconnect-ai": {
        title: "HealthConnect AI",
        category: "Healthcare",
        description: "A comprehensive healthcare management system designed to streamline patient records and provide predictive insights for early symptom detection using specialized AI algorithms.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        tags: ["Next.js", "Python", "FastAPI", "PostgreSQL", "Docker"],
        features: [
            "HIPAA Compliant Data Storage",
            "AI Symptom Checker",
            "Predictive Health Risk Assessment",
            "Telemedicine Integration",
            "Automated Billing & Insurance"
        ],
        github: "https://github.com",
        live: "https://example.com"
    },
    "defect-inspector": {
        title: "Defect Inspector",
        category: "Computer Vision",
        description: "An industrial-grade computer vision system that identifies surface defects in manufacturing lines. It uses Deep Learning to recognize cracks, scratches, and inconsistencies in real-time.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        tags: ["OpenCV", "PyTorch", "Python", "Flask", "CUDA"],
        features: [
            "High-speed Image Processing",
            "Multi-class Defect Classification",
            "Real-time Video Feed Integration",
            "Automated Sorting Mechanism Bridge",
            "Historical Trends Analytics"
        ],
        github: "https://github.com",
        live: "https://example.com"
    }
};

const demos = {
    "ai-powered-task-manager": TaskManager,
    "malware-detection-system": MalwareScanner,
    "healthconnect-ai": HealthConnect,
    "defect-inspector": DefectInspector
};

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectData[id];
    const DemoComponent = demos[id];

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4 dark:text-white">Project Not Found</h2>
                    <Link to="/" className="text-primary font-bold flex items-center gap-2 justify-center">
                        <ArrowLeft size={20} /> Back to Portfolio
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-white dark:bg-slate-950 overflow-hidden"
        >
            {/* Cinematic Background */}
            <div className="absolute top-0 left-0 w-full h-[70vh] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 dark:via-slate-950/80 to-white dark:to-slate-950 z-10" />
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                    src={project.image}
                    className="w-full h-full object-cover blur-sm opacity-30 dark:opacity-20"
                />
            </div>

            <div className="container mx-auto px-6 max-w-7xl pt-40 relative z-20">
                <Link to="/#projects" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-all mb-16 font-bold group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Explorations
                </Link>

                <div className="grid lg:grid-cols-12 gap-16 mb-32">
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="px-5 py-2 glass-panel text-primary rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-8 inline-block border-primary/20">
                                {project.category}
                            </span>
                            <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-10 tracking-tighter leading-none">
                                {project.title.split(' ').map((word, i) => (
                                    <span key={i} className={i % 2 === 1 ? "text-primary" : ""}>
                                        {word}{' '}
                                    </span>
                                ))}
                            </h1>
                            <p className="text-2xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12 font-light max-w-2xl">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-3 mb-16">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-5 py-2 glass-card rounded-2xl text-xs font-bold text-slate-600 dark:text-slate-300 border-white/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-6">
                                <a href="#demo" className="px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black shadow-2xl hover:scale-105 transition-all flex items-center gap-3">
                                    Try Interactive Demo <PlayCircle size={20} />
                                </a>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-10 py-5 glass-card text-slate-900 dark:text-white rounded-2xl font-black hover:scale-105 transition-all flex items-center gap-3">
                                    Source Artifacts <Github size={20} />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-5 space-y-12">
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                            <div className="relative rounded-[2rem] overflow-hidden border border-white/20 shadow-2xl">
                                <img src={project.image} alt={project.title} className="w-full h-auto" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="p-10 rounded-[2rem] glass-card relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -top-16 -right-16" />
                            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">Core Capabilities</h3>
                            <ul className="grid gap-6">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-4 text-slate-600 dark:text-slate-400 font-medium group">
                                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1 transition-transform group-hover:scale-110">
                                            <CheckCircle2 className="text-primary" size={14} />
                                        </div>
                                        <span className="text-lg leading-snug">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Interactive Demo Section */}
                <div id="demo" className="scroll-mt-32 mb-32">
                    <div className="text-center mb-16">
                        <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Deployment</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Interactive Preview</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary via-accent to-primary rounded-[3rem] blur-3xl opacity-10" />
                        {DemoComponent ? (
                            <DemoComponent />
                        ) : (
                            <div className="text-center p-20 glass-panel rounded-3xl">
                                <p>Demo loading unavailable. Please check back later.</p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Bottom Decoration */}
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
        </motion.div>
    );
};

export default ProjectDetails;
