import type { EducationItemProps } from "@/types/cv";
import { getDateRangeDiff, getDisplayDate } from "@/utils/universal";

interface EducItemProps {
    item: EducationItemProps;
}

export default function EducationItemV2({ item }: EducItemProps) {

    const displayDateRange = [
        getDisplayDate(item.start_date, item.display_date),
        getDisplayDate(item.end_date, item.display_date)
    ].join(' - ');

    const dateDiff = getDateRangeDiff(item.start_date, item.end_date);

    return <>
        <li className="list-row flex gap-2 px-0 py-2 pb-3">

            <span className='flex items-start justify-center'>
                <div className='avatar'>
                    <div className='w-10 rounded-full ring ring-base-200 ring-offset-0 bg-base-100 overflow-hidden flex items-center justify-center'>
                        {item?.logo && item.logo.trim() !== '' ? <>
                            <img src={`/logo/${item.logo}`} />
                        </> : <>
                            <i className="pi pi-building"></i>
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
                <div className="text-xs opacity-60">{displayDateRange} · {dateDiff.text}</div>
                <div className="font-semibold">{item.institution}</div>
                <div className="text-sm text-base-content/70">{item.address}</div>
            </div>

        </li>
    </>
}