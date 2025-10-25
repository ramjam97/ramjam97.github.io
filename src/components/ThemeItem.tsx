import { useContext } from "react";
import { AppContext } from "@/App";

interface ThemeItemProps {
    item: string;
}

export default function ThemeItem({ item }: ThemeItemProps) {
    const { theme, setTheme } = useContext(AppContext);
    return <li>
        <a className={`${theme === item && 'menu-active'} w-[99%] mx-auto`} onClick={() => setTheme(item)}>{item}</a>
    </li>
}