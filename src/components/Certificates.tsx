import { AppContext } from "@/context/AppContextProvider";
import { useContext, useEffect, useMemo } from "react";
import Card from "@/components/Card";
import CertificateItem from "@/components/CertificateItem";
import { getMonthYear } from "@/utils/universal";
import type { CertificateItemProps } from "@/types/cv";
import type { MenuItemProps } from "@/hooks/useMenu";

export const COMP_CERTIFICATES: MenuItemProps = {
    id: 'certificates',
    name: 'Certificates & Trainings',
    show: true
};

interface GroupedCertificates {
    [monthYear: string]: CertificateItemProps[];
}

export default function Certificates() {

    const { data, setMenuVisibility } = useContext(AppContext);

    const certificates = data.certificates || [];

    const certificateGroupByYear: GroupedCertificates = useMemo(() => {
        return certificates.reduce<GroupedCertificates>((acc, cert) => {
            const monthYear = getMonthYear(cert.date);
            if (!acc[monthYear]) {
                acc[monthYear] = [];
            }
            acc[monthYear].push(cert);
            return acc;
        }, {});
    }, [certificates]);

    const sortedYears = Object.keys(certificateGroupByYear).sort((a, b) => parseInt(b) - parseInt(a));

    useEffect(() => {
        setMenuVisibility(COMP_CERTIFICATES.id, sortedYears.length > 0);
    }, []);

    return <>
        {sortedYears.length > 0 && <>
            <Card title={`🏆 ${COMP_CERTIFICATES.name}`} id={COMP_CERTIFICATES.id}>
                <div className="flex flex-col pt-2 ps-1">
                    {sortedYears.map((year, idx) => <CertificateGroup
                        key={idx}
                        year={year}
                        items={certificateGroupByYear[year]}
                        index={idx}
                        total={sortedYears.length}
                    />)}
                </div>
            </Card>
        </>}
    </>
}


interface CertificateGroupProps {
    year: string;
    items: CertificateItemProps[];
    index: number;
    total: number;
}

const CertificateGroup = ({ year, items, index, total }: CertificateGroupProps) => {

    return <>
        <div className={`border-secondary border-s pt-5 ps-1 relative ${index === total - 1 ? 'pb-3' : 'pb-1'}`}>

            <span className="px-2 pe-4 absolute top-0 left-0 bg-secondary text-secondary-content">
                <span>Year {year}</span>
                <span className="bg-secondary border border-secondary absolute top-[50%] left-0 transform translate-y-[-50%] translate-x-[-50%] rotate-45 w-2 h-2"></span>
                <span className="absolute top-[50%] right-0 w-4 h-4 bg-base-200 transform translate-y-[-40%] translate-x-[50%] rotate-45"></span>
            </span>

            <div className="p-2 flex flex-col gap-2">
                {items.map((item, idx) => <CertificateItem key={idx} item={item} />)}
            </div>

            {index === total - 1 && <span className="absolute bottom-0 left-0 lh-0 w-2 h-2 bg-secondary transform translate-x-[-55%] rounded-full"></span>}

        </div>
    </>

}