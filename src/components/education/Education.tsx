import { useContext, useEffect } from "react";
import { AppContext } from "@/context/AppContextProvider";
import Card from "@/components/Card";
import EducationItem from "@/components/education/EducationItem";
import EducationItemV2 from "@/components/education/EducationItemV2";
import type { MenuItemProps } from "@/hooks/useMenu";

export const COMP_EDUCATION: MenuItemProps = {
    id: 'education',
    name: 'Education',
    show: true
};
export default function Education() {

    const { data, setMenuVisibility } = useContext(AppContext);

    const templateVersion: number = 2;
    const educations = data.education || [];

    useEffect(() => {
        setMenuVisibility(COMP_EDUCATION.id, educations.length > 0);
    }, [])

    return <>
        {educations.length > 0 && <>
            <Card title={`🎓 ${COMP_EDUCATION.name}`} id={COMP_EDUCATION.id}>
                {templateVersion === 1 && <>
                    <div className="flex flex-col">
                        {educations.map((item, index) => <EducationItem
                            key={index}
                            index={index}
                            total={educations.length}
                            item={item}
                        />)}
                    </div>
                </>}
                {templateVersion === 2 && <>
                    <ul className="list py-2">
                        {educations.map((item, index) => <EducationItemV2
                            key={`v2-${index}`}
                            index={index}
                            total={educations.length}
                            item={item}
                        />)}
                    </ul>
                </>}
            </Card>
        </>}
    </>
}