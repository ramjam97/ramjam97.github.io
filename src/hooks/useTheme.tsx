import { useEffect, useState } from "react";
import { DEFAULT_THEME, THEME_SESSION_NAME } from "@/constant/themes";

export default function useTheme(): [string, React.Dispatch<React.SetStateAction<string>>] {

    const [theme, setTheme] = useState(localStorage.getItem(THEME_SESSION_NAME) || DEFAULT_THEME);

    useEffect(() => {
        setDOMTheme(theme);
    }, [theme]);

    return [theme, setTheme]
}

export function setDOMTheme(theme: string) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_SESSION_NAME, theme);
}