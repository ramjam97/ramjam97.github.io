import { useContext, useEffect, useRef } from "react";
import { AppContext } from "@/App";
import { THEMES_COLLECTION } from "@/constant/themes";
import ThemeItem from "@/components/ThemeItem";

const ThemeDrawer = () => {

    const { showThemeController, setShowThemeController } = useContext(AppContext);

    const cb = useRef<HTMLInputElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setShowThemeController(e.target.checked);

    const sortedThemes = THEMES_COLLECTION.sort((a, b) => a.localeCompare(b));

    useEffect(() => {
        if (cb.current) cb.current.checked = showThemeController;
    }, [showThemeController]);

    return <>
        <div className="drawer drawer-end">
            <input ref={cb} id="theme-controller-drawer" onChange={handleChange} type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="theme-controller-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 relative">
                    <div className="py-3 pb-5 flex flex-row items-center justify-between sticky top-0 bg-base-200 z-1 w-full">
                        <span className="font-bold">CHOOSE THEME</span>
                        <button className="btn btn-sm btn-circle" onClick={() => setShowThemeController(false)}>
                            <i className="pi pi-times"></i>
                        </button>
                    </div>
                    {sortedThemes.map((theme, index) => <ThemeItem key={index} item={theme} />)}
                </ul>
            </div>
        </div>
    </>
}

export default ThemeDrawer