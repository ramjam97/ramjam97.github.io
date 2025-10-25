import { useContext } from "react"
import { AppContext } from "@/App"
import type { MenuItemProps } from "@/hooks/useMenu";

const Menu = () => {

    const { menu, showThemeController } = useContext(AppContext);

    const list = menu.filter(item => item.show).reverse();

    return <>
        {!showThemeController && <>
            <div className="fab bottom-7">
                <div tabIndex={0} role="button" className="btn btn-lg btn-circle btn-info">
                    <i className="pi pi-ellipsis-v"></i>
                </div>
                <div className="fab-close">
                    <span className="btn btn-circle btn-lg btn-error">✕</span>
                </div>
                {list.map(item => <MenuItem key={item.id} item={item} />)}
            </div>
        </>}
    </>
}

export default Menu;


const MenuItem = ({ item }: { item: MenuItemProps }) => {
    const handleScrollToElement = () => {
        const element = document.getElementById(item.id);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return <button key={item.id} className="btn btn-lg shadow-lg w-full" onClick={handleScrollToElement}>{item.name}</button>
}