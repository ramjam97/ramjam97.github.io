import { AppContext } from "@/context/AppContextProvider"
import { useContext } from "react"

export default function EmailSent() {

    const { contactState } = useContext(AppContext);
    const { setShow } = contactState;

    return <>
        <div className="flex flex-col gap-1 items-center">
            <i className="pi pi-check-circle text-3xl text-success"></i>
            <h3 className="font-semibold">Email successfully sent!</h3>
            <p className="text-sm text-center text-base-content/80">I will get back to you as soon as possible.</p>
            <div className="mt-2">
                <button className="btn btn-sm" onClick={() => setShow(false)}>Close</button>
            </div>
        </div>
    </>
}
