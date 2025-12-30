import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X, Home, User, Code, Briefcase, Mail, Sun, Moon } from "lucide-react";
import useTheme from "../hooks/useTheme";
import { cn } from "../lib/utils";

const NavLink = ({ to, icon: Icon, label, active, onClick }) => (
    <Link
        to={to}
        onClick={onClick}
        className={cn(
            "relative flex items-center justify-center p-3 rounded-xl transition-all duration-300 group",
            active
                ? "text-primary bg-primary/10 shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/10"
        )}
    >
        <Icon size={20} />
        <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-background border border-border text-foreground text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
            {label}
        </span>
        {active && (
            <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 rounded-xl border border-primary/20"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
        )}
    </Link>
);

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [activeSection, setActiveSection] = useState("home");
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            setScrollProgress((currentScroll / totalScroll) * 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { id: "home", label: "Home", icon: Home, path: "/" },
        { id: "about", label: "About", icon: User, path: "/#about" },
        { id: "skills", label: "Skills", icon: Code, path: "/#skills" },
        { id: "projects", label: "Projects", icon: Briefcase, path: "/#projects" },
        { id: "contact", label: "Contact", icon: Mail, path: "/#contact" },
    ];

    return (
        <>
            {/* Scroll Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-[2px] z-[100]">
                <div
                    className="h-full bg-gradient-to-r from-primary via-accent to-secondary transition-all duration-300 ease-out"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={cn(
                    "fixed top-0 left-0 w-full z-50 transition-all duration-500",
                    scrolled ? "py-4" : "py-6"
                )}
            >
                <div className="container mx-auto px-4">
                    <div className={cn(
                        "flex items-center justify-between p-2 rounded-2xl transition-all duration-500 max-w-2xl mx-auto backdrop-blur-xl",
                        scrolled
                            ? "bg-background/80 border border-border shadow-2xl"
                            : "bg-background/40 border border-white/5"
                    )}>
                        <Link to="/" className="flex items-center gap-2 font-bold text-xl px-4 text-foreground">
                            A<span className="text-primary">B.</span>
                        </Link>

                        <div className="flex items-center gap-1">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.id}
                                    to={item.path}
                                    icon={item.icon}
                                    label={item.label}
                                    active={activeSection === item.id}
                                    onClick={() => setActiveSection(item.id)}
                                />
                            ))}

                            <div className="w-px h-6 bg-border mx-2" />

                            <button
                                onClick={toggleTheme}
                                className="p-3 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 group relative"
                            >
                                <motion.div
                                    initial={false}
                                    animate={{ rotate: theme === "dark" ? 0 : 180 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                >
                                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                                </motion.div>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>
        </>
    );
};

export default Navbar;
