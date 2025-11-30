import type { CertificateItemProps } from "@/types/cv";

interface CertItemProps {
    item: CertificateItemProps;
}

export default function CertificateItem({ item }: CertItemProps) {
    return <>
        <span className="relative">
            <span className="bg-base-200 border border-secondary absolute left-0 w-2 h-2 absolute top-3 left-0 transform translate-y-[-50%] translate-x-[-250%] rounded-full"></span>
            <a href={item.url} target="_blank">
                <div className="font-bold link-hover">{item.title}</div>
            </a>
            <div className="font-semibold"><span className="text-base-content/80">Issued by</span> {item.issuer}</div>
        </span>
    </>
}