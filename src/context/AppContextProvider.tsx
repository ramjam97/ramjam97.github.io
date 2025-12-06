import { createContext, useState } from "react";
import Data from '@/assets/data.json';
import type { MenuItemProps } from "@/hooks/useMenu";
import useMenu from "@/hooks/useMenu";
import useTheme from '@/hooks/useTheme';
import type { DetailsProps } from "@/types/cv";
import useContactForm, { type ContactFormProps } from "@/hooks/useContactForm";

interface AppContextProps {
    data: DetailsProps | undefined | null;
    showThemeController: boolean;
    setShowThemeController: React.Dispatch<React.SetStateAction<boolean>>;
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    menu: MenuItemProps[];
    setMenuVisibility: (id: string, isShow: boolean) => void;
    contactState: ContactFormProps;
}

export const AppContext = createContext<AppContextProps>(null);

export default function AppContextProvider({ children }: { children: React.ReactNode }) {

    const data: DetailsProps = Data;

    const [showThemeController, setShowThemeController] = useState(false);
    const [theme, setTheme] = useTheme();
    const [menu, setMenuVisibility] = useMenu();

    const contactState = useContactForm();

    return <AppContext.Provider value={{
        data,
        showThemeController, setShowThemeController,
        theme, setTheme,
        menu, setMenuVisibility,
        contactState
    }}>{children}</AppContext.Provider>
}
