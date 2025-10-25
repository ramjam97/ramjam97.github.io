import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import '@/App.css'
import App from '@/App.tsx'
import { THEME_SESSION_NAME } from '@/constant/themes.tsx';

const theme = localStorage.getItem(THEME_SESSION_NAME);
if (theme) document.documentElement.setAttribute('data-theme', theme);

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)