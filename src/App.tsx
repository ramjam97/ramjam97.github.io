import React, { createContext, useEffect, useState } from 'react';
import Data from '@/assets/data.json';
import type { DetailsProps } from '@/types/cv';
import { DEFAULT_THEME, THEME_SESSION_NAME } from '@/constant/themes';
import useMenu, { type MenuItemProps } from '@/hooks/useMenu';
import Layout from '@/components/Layout';

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

function App() {

  const data: DetailsProps = Data;

  const [showThemeController, setShowThemeController] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem(THEME_SESSION_NAME) || DEFAULT_THEME);
  const [menu, setMenuVisibility] = useMenu();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_SESSION_NAME, theme);
  }, [theme]);

  const appContextData: AppContextProps = {
    data,
    showThemeController, setShowThemeController,
    theme, setTheme,
    menu, setMenuVisibility
  }

  return <>
    <AppContext.Provider value={appContextData}>
      <div className='bg-base-300 min-h-screen'>{data && <Layout />}</div>
    </AppContext.Provider>
  </>
}

export default App
