import { useState, useEffect } from "react";

const useTheme = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (localStorage.getItem("theme") === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            setTheme("light");
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return { theme, toggleTheme };
};

export default useTheme;
