import { useMemo } from "react";
import type { ExperienceItemProps } from "@/types/cv";

interface ExperiencesItemProps {
    index: number;
    total: number;
    item: ExperienceItemProps;
    collapsedItems: number[]
    toogleCollapse: (index: number) => void;
}
const ExperienceItem = (props: ExperiencesItemProps) => {

    const { index, total, item, collapsedItems, toogleCollapse } = props;

    const date = `${item.start_date} - ${item.end_date}`;

    const isOpen = useMemo(() => !collapsedItems.includes(index), [collapsedItems, index]);

    const handleCollapse = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        toogleCollapse(index);
    }

    return <>
        <div className="border-info border-s pt-7 pb-3 ps-2 relative">

            <span className={`px-2 pe-4 absolute top-0 left-0 bg-info text-info-content`}>
                <span>{date}</span>
                <span className={`bg-info border border-info absolute top-[50%] left-0 transform translate-y-[-50%] translate-x-[-50%] rotate-45 w-2 h-2`}></span>
                <span className="absolute top-[50%] right-0 w-4 h-4 bg-base-100 transform translate-y-[-40%] translate-x-[50%] rotate-45"></span>
            </span>

            <details className="collapse" open={isOpen}>
                <summary className="collapse-title p-2" onClick={handleCollapse}>
                    <div className="font-bold">{item.position}</div>
                    <div className="font-semibold">{item.company}</div>
                    <div className="text-sm text-base-content/70">{item.address}</div>
                </summary>
                <div className="collapse-content text-sm px-2 mt-1">
                    <span className="font-semibold">Key Achievements:</span>
                    <ul className="list-none space-y-1">
                        {item.contributions.map((contribution, index) => <li key={index} className="relative pl-5 before:content-['→'] before:absolute before:left-0 before:text-base-content">
                            <div>
                                <span>{contribution.description}</span>
                                {contribution?.extra_info?.length > 0 &&
                                    <ul className="list-none space-y-1">
                                        {contribution.extra_info.map((bullet, index) => <li key={index} className="relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-base-content">{bullet}</li>)}
                                    </ul>
                                }
                            </div>
                        </li>)}
                    </ul>
                </div>
            </details>

            {index === total - 1 && <span className="absolute bottom-0 left-0 lh-0 w-2 h-2 bg-info transform translate-x-[-50%] rounded-full"></span>}

        </div>
    </>
}

export default ExperienceItem