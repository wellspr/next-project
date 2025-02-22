"use client";

import "./sass/themes.scss";

import { createContext, useContext, useState } from "react";

export type ThemeType = "light" | "dark"

export type ThemeContextType = {
    mode: ThemeType
    setMode: React.Dispatch<React.SetStateAction<ThemeType>>
}

const defaultValue: ThemeContextType = {
    mode: "dark",
    setMode: () => { }
};

const Context = createContext(defaultValue);

export const ThemeContext = ({ children }: { children: React.ReactNode }) => {

    const [mode, setMode] = useState<ThemeType>("dark");

    const value: ThemeContextType = {
        mode,
        setMode
    }

    return <Context.Provider value={value}>
        <body className={mode}>
            {children}
        </body>
    </Context.Provider>
};

export const useTheme = () => useContext<ThemeContextType>(Context);