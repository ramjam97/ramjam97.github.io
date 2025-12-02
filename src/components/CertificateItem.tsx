import type { CertificateItemProps } from "@/types/cv";

interface CertItemProps {
    item: CertificateItemProps;
}

export default function CertificateItem({ item }: CertItemProps) {
    return <>
        <span className="relative">
            <span className="bg-base-200 border border-secondary absolute left-0 w-2 h-2 absolute top-[30%] left-0 transform translate-y-[-50%] translate-x-[-206%] rounded-full"></span>
            <a href={item.url} target="_blank">
                <div className="font-bold link-hover">{item.title}</div>
            </a>
            <div className="text-xs">
                <span className="text-base-content/80">Issued by</span> <span className="font-semibold text-base-content/85">{item.issuer}</span>
            </div>
        </span>
    </>
}