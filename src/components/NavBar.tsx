import { useEffect, useState } from "react";

const NavBar = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <div className="flex justify-between items-center p-4 text-black dark:text-white border-b border-black dark:border-white ">
            <h1 className="text-2xl font-bold">Weather App</h1>
            <button
                onClick={toggleTheme}
                className="px-4 py-2 rounded bg-blue-500 text-white"
            >
                {theme === "light" ? "Switch to Dark" : "Switch to Light"}
            </button>
        </div>
    );
};

export default NavBar;
