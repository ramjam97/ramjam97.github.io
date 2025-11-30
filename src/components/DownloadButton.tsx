import { useContext, useEffect, useState } from 'react';
import { AppContext } from '@/context/AppContextProvider';
import cv from '@/assets/cv.pdf';

export default function DownloadButton() {

    const { data } = useContext(AppContext);

    const [isDownloading, setIsDownloading] = useState(false);
    const [showSuccessIcon, setShowSuccessIcon] = useState(false);

    const handleDownloadCv = () => {
        setIsDownloading(true);

        const link = document.createElement('a');
        link.href = cv;
        link.download = `${data.name} (cv).pdf`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setTimeout(() => {
            setIsDownloading(false);
            setShowSuccessIcon(true);
        }, 500);
    };

    useEffect(() => {
        if (showSuccessIcon) setTimeout(() => setShowSuccessIcon(false), 1000);
    }, [showSuccessIcon]);

    return <>
        <button className="btn btn-accent btn-sm" onClick={handleDownloadCv} disabled={isDownloading}>
            {showSuccessIcon ? <i className="pi pi-check-circle"></i> : <i className="pi pi-download"></i>} Download CV
        </button>
    </>
}