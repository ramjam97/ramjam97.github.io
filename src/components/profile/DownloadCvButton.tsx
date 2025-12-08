export default function DownloadCvButton() {

    const cvLink = "https://drive.google.com/file/d/1O6-WKU62ena1mgWUwMXN4UuCNZW59SBf/view?usp=sharing";

    return <>
        <a className="btn btn-accent btn-sm" download={cvLink} href={cvLink} target="_blank">
            <i className="pi pi-download"></i> Download CV
        </a>
    </>
}
