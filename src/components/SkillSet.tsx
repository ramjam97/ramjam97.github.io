interface SkillSetProps {
    title: string,
    skills: string[]
}

const SkillSet = ({ title, skills }: SkillSetProps) => {
    return <>
        {skills.length > 0 && <>
            <span className="flex flex-col gap-1">
                <h3 className="font-semibold">{title}</h3>
                <div className='flex flex-wrap gap-1 mb-1'>
                    {skills.map((skill, index) => <span className="badge badge-success" key={index}>{skill}</span>)}
                </div>
            </span>
        </>}
    </>
}

export default SkillSet