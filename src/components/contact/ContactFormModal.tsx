import { useContext, useRef } from "react"
import { AppContext } from "@/context/AppContextProvider";
import ContactForm from "@/components/contact/ContactForm";
import EmailSent from "@/components/contact/EmailSent";

export default function ContactFormModal() {

    const { contactState } = useContext(AppContext);

    const { show, emailSent } = contactState;

    const dialogRef = useRef<HTMLDialogElement>(null);

    return <>
        <dialog ref={dialogRef} className="modal" open={show}>
            <div className="modal-box p-4 w-full">
                {emailSent ? <EmailSent /> : <ContactForm />}
            </div>
        </dialog >
    </>
}
