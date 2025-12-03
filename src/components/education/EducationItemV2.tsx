import type { EducationItemProps } from "@/types/cv";
import { getDateRangeDiff, getDisplayDate } from "@/utils/universal";

interface EducItemProps {
    index: number;
    total: number;
    item: EducationItemProps;
}

export default function EducationItemV2({ index, total, item }: EducItemProps) {

    const displayDateRange = [
        getDisplayDate(item.start_date, item.display_date),
        getDisplayDate(item.end_date, item.display_date)
    ].join(' - ');

    const dateDiff = getDateRangeDiff(item.start_date, item.end_date);

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

            <div className="flex flex-col gap-0">
                {item?.url && item.url.trim() !== '' ? <>
                    <a href={item.url} target="_blank" className="font-bold link-hover">{item.degree}</a>
                </> : <>
                    <span className="font-bold">{item.degree}</span>
                </>}
                <div className="text-xs text-base-content/70">{displayDateRange} · {dateDiff.text}</div>
                <div className="font-semibold">{item.institution}</div>
                <div className="text-xs text-base-content/70">{item.address}</div>
            </div>

        </li>
    </>
}