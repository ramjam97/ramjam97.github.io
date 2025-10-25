import { useContext, useEffect } from "react";
import Card from "@/components/Card";
import { AppContext } from "@/App";
import EducationItem from "@/components/EducationItem";

export const ID_EDUCATION = "education";
const Education = () => {

    const { data, setMenuVisibility } = useContext(AppContext);

    const educations = data.education || [];

    useEffect(() => {
        setMenuVisibility(ID_EDUCATION, educations.length > 0);
    }, [])

    return <>
        {educations.length > 0 && <>
            <Card title='👨‍🎓 Education' id={ID_EDUCATION}>
                <div className="flex flex-col">
                    {educations.map((item, index) => <EducationItem
                        key={index}
                        index={index}
                        total={educations.length}
                        item={item}
                    />)}
                </div>
            </Card>
        </>}
    </>
}
export default Education