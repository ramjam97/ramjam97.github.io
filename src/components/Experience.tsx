import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/AppContextProvider";
import Card from "@/components/Card";
import ExperienceItem from "@/components/ExperienceItem";
import ExperienceItemV2 from "@/components/ExperienceItemV2";

export const ID_EXPERIENCE = "experience";

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
        setMenuVisibility(ID_EXPERIENCE, experience.length > 0);
    }, []);

    return <>
        {experience.length > 0 &&
            <Card id={ID_EXPERIENCE}>
                <div className="flex justify-between items-center">
                    <h2 className="card-title text-primary text-xl">🚀 Experiences</h2>
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