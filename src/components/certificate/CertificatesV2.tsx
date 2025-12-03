import { useContext, useEffect } from "react";
import { AppContext } from "@/context/AppContextProvider";
import { getMonthYear, sortArrayObjectByKey } from "@/utils/universal";
import type { CertificateItemProps } from "@/types/cv";
import type { MenuItemProps } from "@/hooks/useMenu";
import Card from "../Card";

export const COMP_CERTIFICATES_V2: MenuItemProps = {
    id: 'certificates-v2',
    name: 'Certificates & Trainings',
    show: true
};

export default function CertificatesV2() {

    const { data, setMenuVisibility } = useContext(AppContext);

    const certificates: CertificateItemProps[] = sortArrayObjectByKey(data.certificates || [], 'date', true).filter(cert => cert.show);

    useEffect(() => {
        setMenuVisibility(COMP_CERTIFICATES_V2.id, certificates.length > 0);
    }, []);

    return <>
        {certificates.length > 0 && <>
            <Card title={`📜 ${COMP_CERTIFICATES_V2.name}`} id={COMP_CERTIFICATES_V2.id}>
                <ul className="list py-2">
                    {certificates.map((item, index) => <CertItem key={index} index={index} total={certificates.length} item={item} />)}
                </ul>
            </Card>
        </>}
    </>
}

interface CertItemProps {
    index: number;
    total: number;
    item: CertificateItemProps;
}

const CertItem = ({ index, total, item }: CertItemProps) => {

    const displayDate = getMonthYear(item.date);

    return <>
        <li className={`list-row flex gap-2 px-0 ${index === 0 ? 'pt-0' : 'pt-2'} ${(index + 1) === total ? 'pb-0' : 'pb-3'}`}>

            <span className='flex items-start justify-center'>
                <div className='avatar'>
                    <div className='w-10 rounded-full ring ring-base-200 ring-offset-0 bg-base-100 overflow-hidden flex items-center justify-center'>
                        {item?.logo && item.logo.trim() !== '' ? <>
                            <img src={`/logo/${item.logo}`} />
                        </> : <>
                            <i className="pi pi-star text-base-content/40"></i>
                        </>}
                    </div>
                </div>
            </span>

            <span className="flex flex-col gap-0">
                <a href={item.url} target="_blank" className="font-bold link-hover">{item.title}</a>
                <div className="flex gap-1 items-center">
                    <span className="font-semibold text-base-content/85">{item.issuer}</span>
                    <span>·</span>
                    <span className="text-xs text-base-content/80">{displayDate}</span>
                </div>
            </span>

        </li>
    </>
}