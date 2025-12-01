import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/AppContextProvider";
import Card from "@/components/Card";
import ExperienceItem from "@/components/ExperienceItem";
import ExperienceItemV2 from "@/components/ExperienceItemV2";
import type { MenuItemProps } from "@/hooks/useMenu";

export const COMP_EXPERIENCE: MenuItemProps = {
    id: 'experiences',
    name: 'Experiences',
    show: true
};

export default function Experience() {

    const { data, setMenuVisibility } = useContext(AppContext);

    const templateVersion: number = 2;
    const experience = data.experience || [];

    const [collapsedItems, setCollapsedItems] = useState<number[]>(experience.map((_, index) => index));

    const toogleCollapse = (index: number) => {
        setCollapsedItems(list => list.includes(index)
            ? list.filter(item => item !== index)
            : [...new Set([...list, index])]);
    };

    const isAllCollapsed = collapsedItems.length === experience.length;
    const toogleCollapseAll = () => isAllCollapsed
        ? setCollapsedItems([])
        : setCollapsedItems(experience.map((_, index) => index));

    useEffect(() => {
        setMenuVisibility(COMP_EXPERIENCE.id, experience.length > 0);
    }, []);

    return <>
        {experience.length > 0 &&
            <Card id={COMP_EXPERIENCE.id}>
                <div className="flex justify-between items-center">
                    <h2 className="card-title text-primary text-xl">🚀 {COMP_EXPERIENCE.name}</h2>
                    <label className="btn btn-circle btn-ghost swap swap-rotate">
                        <input type="checkbox" checked={isAllCollapsed} onChange={() => toogleCollapseAll()} />
                        <i className="swap-on pi pi-angle-right"></i>
                        <i className="swap-off pi pi-angle-down"></i>
                    </label>
                </div>

                {templateVersion === 1 && <>
                    <div className="flex flex-col">
                        {experience.map((item, index) => <ExperienceItem
                            key={index}
                            index={index}
                            total={experience.length}
                            item={item}
                            collapsedItems={collapsedItems}
                            toogleCollapse={toogleCollapse}
                        />)}
                    </div>
                </>}
                {templateVersion === 2 && <>
                    <ul className="list">
                        {experience.map((item, index) => <ExperienceItemV2
                            key={`v2-${index}`}
                            index={index}
                            item={item}
                            collapsedItems={collapsedItems}
                            toogleCollapse={toogleCollapse}
                        />)}
                    </ul>
                </>}

            </Card>
        }
    </>
}