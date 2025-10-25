import { useContext } from "react";
import { AppContext } from "@/App";

interface ThemeItemProps {
    item: string;
}

const ThemeItem = ({ item }: ThemeItemProps) => {
    const { theme, setTheme } = useContext(AppContext);
    return <li>
        <a className={`${theme === item && 'menu-active'} w-[99%] mx-auto`} onClick={() => setTheme(item)}>{item}</a>
    </li>
}

export default ThemeItem