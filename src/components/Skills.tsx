import { useContext, useEffect } from "react";
import { AppContext } from "@/context/AppContextProvider";
import SkillSet from "@/components/SkillSet";
import Card from "@/components/Card";
import type { MenuItemProps } from "@/hooks/useMenu";

export const COMP_SKILLS: MenuItemProps = {
    id: 'skills',
    name: 'Skills',
    show: true
};

export default function Skills() {

    const { data, setMenuVisibility } = useContext(AppContext);
    const skills = data.technical_skills || [];

    useEffect(() => {
        setMenuVisibility(COMP_SKILLS.id, skills.length > 0);
    }, []);

    return <>
        {skills.length > 0 && <>
            <Card title={`👨‍💻 ${COMP_SKILLS.name}`} id={COMP_SKILLS.id}>
                <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-3">
                    {skills.map((skill, index) => <SkillSet key={index} title={skill.title} skills={skill.skills} />)}
                </div>
            </Card>
        </>}
    </>
}