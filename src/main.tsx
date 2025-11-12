import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import '@/App.css'
import App from '@/App.tsx'
import { THEME_SESSION_NAME } from '@/constant/themes.tsx';
import { setDOMTheme } from '@/hooks/useTheme'

const theme = localStorage.getItem(THEME_SESSION_NAME);
if (theme) setDOMTheme(theme);

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)