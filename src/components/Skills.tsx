import { useContext, useEffect } from "react";
import { AppContext } from "@/App";
import SkillSet from "@/components/SkillSet";
import Card from "@/components/Card";

export const ID_SKILLS = "skills";
const Skills = () => {

    const { data, setMenuVisibility } = useContext(AppContext);
    const skills = data.technical_skills || [];

    useEffect(() => {
        setMenuVisibility(ID_SKILLS, skills.length > 0);
    }, []);

    return <>
        {skills.length > 0 &&
            <Card title='👨‍💻 Skills' id={ID_SKILLS}>
                <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-3">
                    {skills.map((skill, index) => <SkillSet key={index} title={skill.title} skills={skill.skills} />)}
                </div>
            </Card>
        }
    </>
}

export default Skills