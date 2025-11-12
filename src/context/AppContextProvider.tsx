import Data from '@/assets/data.json';
import { DEFAULT_THEME, THEME_SESSION_NAME } from "@/constant/themes";
import type { MenuItemProps } from "@/hooks/useMenu";
import useMenu from "@/hooks/useMenu";
import type { DetailsProps } from "@/types/cv";
import { createContext, useEffect, useState } from "react";

interface AppContextProps {
    data: DetailsProps | undefined | null;
    showThemeController: boolean;
    setShowThemeController: React.Dispatch<React.SetStateAction<boolean>>;
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    menu: MenuItemProps[];
    setMenuVisibility: (id: string, isShow: boolean) => void;
}

export const AppContext = createContext<AppContextProps>(null);

export default function AppContextProvider({ children }: { children: React.ReactNode }) {

    const data: DetailsProps = Data;

    const [showThemeController, setShowThemeController] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem(THEME_SESSION_NAME) || DEFAULT_THEME);
    const [menu, setMenuVisibility] = useMenu();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_SESSION_NAME, theme);
    }, [theme]);

    return <AppContext.Provider value={{
        data,
        showThemeController, setShowThemeController,
        theme, setTheme,
        menu, setMenuVisibility,
    }}>{children}</AppContext.Provider>
}
