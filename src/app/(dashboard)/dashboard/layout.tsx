"use client";

import "./dashboard.scss";
import { useTheme } from "@/themes/Context/ThemeContext";

export default function Layout({ children }: { children: React.ReactNode }) {

    const { mode } = useTheme();

    return (
        <div className={`dashboard ${mode}`}>
            {children}
        </div>
    );
}