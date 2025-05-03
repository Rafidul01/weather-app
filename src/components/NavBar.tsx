import { useEffect, useState } from "react";
import darkLogo from "../../public/darkLogo.png";
import lightLogo from "../../public/lightLogo.svg";
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
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md"
            >
                {theme === "dark" ? <img src={lightLogo} alt="darkLogo" className="w-6 h-6" /> : <img src={darkLogo} alt="darkLogo" className="w-6 h-6" />}
            </button>
        </div>
    );
};

export default NavBar;
