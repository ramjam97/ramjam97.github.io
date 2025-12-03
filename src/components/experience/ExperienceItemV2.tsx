import { useMemo } from "react";
import type { ContributionItem, ExperienceItemProps } from "@/types/cv"
import { getDateRangeDiff, getDisplayDate } from "@/utils/universal";

interface ExperienceItemV2Props {
    index: number;
    total: number;
    item: ExperienceItemProps;
    collapsedItems: number[]
    toogleCollapse: (index: number) => void;
}


export default function ExperienceItemV2(props: ExperienceItemV2Props) {

    const { index, total, item, collapsedItems, toogleCollapse } = props;

    const displayDateRange = [
        getDisplayDate(item.start_date, item.display_date),
        getDisplayDate(item.end_date, item.display_date)
    ].join(' - ');

    const dateDiff = getDateRangeDiff(item.start_date, item.end_date);

    const isOpen = useMemo(() => !collapsedItems.includes(index), [collapsedItems, index]);

    const handleCollapse = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        e.preventDefault();
        toogleCollapse(index);
    }

    return <>
        <li className={`list-row flex gap-2 px-0 ${index === 0 ? 'pt-0' : 'pt-2'} ${(index + 1) === total ? 'pb-0' : 'pb-3'}`}>

            <span className='flex items-start justify-center'>
                <div className='avatar'>
                    <div className='w-10 rounded-full ring ring-base-200 ring-offset-0 bg-base-100 overflow-hidden flex items-center justify-center'>
                        {item?.logo && item.logo.trim() !== '' ? <>
                            <img src={`/logo/${item.logo}`} />
                        </> : <>
                            <i className="pi pi-building text-2xl text-base-content/20"></i>
                        </>}
                    </div>
                </div>
            </span>

            <details className="collapse rounded-xs" open={isOpen}>

                <summary className="collapse-title p-0" onClick={handleCollapse}>
                    <div className="flex flex-row gap-2">
                        <span className="flex flex-col gap-1">
                            <div>
                                <div className="font-bold link-hover">{item.position}</div>
                                <div className="text-xs text-base-content/70">{displayDateRange} · {dateDiff.text}</div>
                            </div>
                            <div>
                                <div className="font-semibold">{item.company}</div>
                                <div className="text-xs text-base-content/70">{item.address}</div>
                            </div>
                        </span>
                    </div>
                </summary>

                <div className="collapse-content text-sm p-0 mt-1">
                    <span className="font-semibold">Key Achievements:</span>
                    <ul className="list-none space-y-1">
                        {item.contributions.map((contribution, ind) => <ContributeItem key={ind} contribution={contribution} />)}
                    </ul>
                </div>

            </details>

        </li>
    </>
}

const ContributeItem = ({ contribution }: { contribution: ContributionItem }) => {
    return <>
        <li className="relative pl-5 before:content-['→'] before:absolute before:left-0 before:text-base-content">
            <div>
                <span>{contribution.description}</span>
                {contribution?.extra_info?.length > 0 &&
                    <ul className="list-none space-y-1">
                        {contribution.extra_info.map((bullet, index) => <li key={index} className="relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-base-content">{bullet}</li>)}
                    </ul>
                }
            </div>
        </li>
    </>
}