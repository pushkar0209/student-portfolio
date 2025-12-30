import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
    {
        title: "AI-Powered Task Manager",
        category: "Full Stack",
        description: "A smart productivity tool that uses NLP to categorize and prioritize tasks automatically.",
        tags: ["React", "Node.js", "TensorFlow.js"],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
        github: "https://github.com",
        live: "https://example.com"
    },
    {
        title: "Malware Detection System",
        category: "Machine Learning",
        description: "An ensemble learning approach to detect Android malware with 98% accuracy.",
        tags: ["Python", "Sklearn", "Android API"],
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
        github: "https://github.com",
        live: "https://example.com"
    },
    {
        title: "HealthConnect AI",
        category: "Healthcare",
        description: "A patient management system with predictive analytics for early symptom detection.",
        tags: ["Next.js", "Python", "FastAPI"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        github: "https://github.com",
        live: "https://example.com"
    },
    {
        title: "Defect Inspector",
        category: "Computer Vision",
        description: "Real-time industrial surface defect detection using convolutional neural networks.",
        tags: ["OpenCV", "PyTorch", "Python"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        github: "https://github.com",
        live: "https://example.com"
    }
];

const ProjectCard = ({ project, index }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

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
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="group relative h-full perspective-1000"
        >
            <div className="relative h-full bg-card border border-border rounded-[2rem] overflow-hidden shadow-xl transition-shadow duration-300 hover:shadow-2xl hover:shadow-primary/20 transform-style-3d">

                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden transform-style-3d translate-z-10">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />

                    <div className="absolute top-4 left-4 transform-style-3d translate-z-20">
                        <span className="px-4 py-1.5 backdrop-blur-md bg-background/50 border border-primary/20 rounded-full text-[10px] font-bold tracking-widest uppercase text-primary">
                            {project.category}
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8 relative z-10 transform-style-3d translate-z-20 -mt-10">
                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors leading-tight">
                        {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-6 line-clamp-2 leading-relaxed h-[2.5em]">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-secondary/10 text-secondary border border-secondary/10">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                        <Link
                            to={`/project/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
                        >
                            View Details <ArrowRight size={16} />
                        </Link>

                        <div className="flex gap-3">
                            <a href={project.github} className="p-2 rounded-full bg-background/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors border border-border hover:border-primary/50" target="_blank" rel="noopener noreferrer">
                                <Github size={18} />
                            </a>
                            <a href={project.live} className="p-2 rounded-full bg-background/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-colors border border-border hover:border-primary/50" target="_blank" rel="noopener noreferrer">
                                <ExternalLink size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden bg-background">
            <div className="container mx-auto px-4 relative z-10 max-w-7xl">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Portfolio</span>
                        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-foreground">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Works</span></h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-xl font-light leading-relaxed">
                            Solutions engineered for performance, scalability, and user experience.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
