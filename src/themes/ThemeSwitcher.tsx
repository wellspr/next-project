"use client";

import "./sass/theme-switcher.scss";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "./ThemeContext";

export const ThemeSwitcher = () => {

    const { mode, setMode } = useTheme();

    return (
        <div className="theme-switcher">
            {
                mode === "dark" && 
                <button className="theme-switcher__button" onClick={() => setMode("light")}>
                    <IconSun />
                </button>
            }

            {
                mode === "light" &&
                <button className="theme-switcher__button" onClick={() => setMode("dark")}>
                    <IconMoon />
                </button>
            }
        </div>
    );
}