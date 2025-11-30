import { AppContext } from "@/context/AppContextProvider";
import { useContext, useEffect, useMemo } from "react";
import Card from "@/components/Card";
import CertificateItem from "@/components/CertificateItem";
import { getMonthYear } from "@/utils/universal";
import type { CertificateItemProps } from "@/types/cv";

export const ID_CERTIFICATES = "certificates";

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
        setMenuVisibility(ID_CERTIFICATES, sortedYears.length > 0);
    }, []);

    return <>
        {sortedYears.length > 0 && <>
            <Card title='📜 Certificates' id={ID_CERTIFICATES}>
                <div className="flex flex-col">
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
        <div className="border-success border-s pt-7 pb-3 ps-2 relative">

            <span className="px-2 pe-4 absolute top-0 left-0 bg-success text-success-content">
                <span>Year {year}</span>
                <span className="bg-success border border-success absolute top-[50%] left-0 transform translate-y-[-50%] translate-x-[-50%] rotate-45 w-2 h-2"></span>
                <span className="absolute top-[50%] right-0 w-4 h-4 bg-base-200 transform translate-y-[-40%] translate-x-[50%] rotate-45"></span>
            </span>

            <div className="p-2 flex flex-col gap-2">
                {items.map((item, idx) => <CertificateItem key={idx} item={item} />)}
            </div>

            {index === total - 1 && <span className="absolute bottom-0 left-0 lh-0 w-2 h-2 bg-success transform translate-x-[-50%] rounded-full"></span>}

        </div>
    </>

}