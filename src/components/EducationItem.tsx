import type { EducationItemProps } from "@/types/cv";

interface EducItemProps {
    index: number;
    total: number;
    item: EducationItemProps;
}

const EducationItem = ({ index, total, item }: EducItemProps) => {
    const date = `${item.start_date} - ${item.end_date}`;
    return <>
        <div className={`border-secondary border-s pt-7 pb-3 ps-2 relative`}>

            <span className={`px-2 pe-4 absolute top-0 left-0 bg-secondary text-secondary-content`}>
                <span>{date}</span>
                <span className={`bg-secondary border border-secondary absolute top-[50%] left-0 transform translate-y-[-50%] translate-x-[-50%] rotate-45 w-2 h-2`}></span>
                <span className="absolute top-[50%] right-0 w-4 h-4 bg-base-100 transform translate-y-[-40%] translate-x-[50%] rotate-45"></span>
            </span>

            <div className="p-2">
                <div className="font-bold">{item.degree}</div>
                <div className="font-semibold">{item.institution}</div>
                <div className="text-sm text-base-content/70">{item.address}</div>
            </div>

            {index === total - 1 && <span className="absolute bottom-0 left-0 lh-0 w-2 h-2 bg-secondary transform translate-x-[-50%] rounded-full"></span>}

        </div>
    </>
}

export default EducationItem