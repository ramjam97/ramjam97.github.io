import { useContext, useEffect, useRef, useState } from "react"
import { AppContext } from "@/context/AppContextProvider";
import emailjs from '@emailjs/browser';

const messageLength = 800;

export default function ContactForm() {

    const { contactState } = useContext(AppContext);

    const { show, setShow, setEmailSent } = contactState;

    const formRef = useRef<HTMLFormElement>(undefined);

    const [submitting, setSubmitting] = useState<boolean>(false);
    const [errMsg, setErrMsg] = useState<string>(null);

    const sendEmail = async (e: React.MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {

            setSubmitting(true);
            setErrMsg(null);

            if (formRef.current.message.value.length > messageLength) {
                throw new Error(`Message too long. Max ${messageLength} characters.`);
            }

            await emailjs.sendForm(
                import.meta.env.VITE_EMAIL_SERVICE_ID,
                import.meta.env.VITE_EMAIL_TEMP_ID,
                formRef.current,
                import.meta.env.VITE_EMAIL_PUBLIC_KEY
            );
            formRef.current.reset();
            setEmailSent(true);
        } catch (error) {
            console.log(error);
            let msg = 'Failed to send message';
            if (typeof error === 'string') {
                msg = error;
            } else if (error instanceof Error) {
                msg = error.message;
            }
            setErrMsg(msg);
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        if (formRef.current) {
            const input = formRef.current.querySelector('input[name="from_name"]') as HTMLInputElement;
            if (input) input.focus();
        }
    }, [show]);

    return <>
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
            <h2 className="card-title text-primary text-xl">📧 Contact Form</h2>

            <div className="flex flex-col gap-3">

                {errMsg && <>
                    <div className="alert alert-error flex gap-2 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{errMsg}</span>
                    </div>
                </>}

                <div className='flex flex-col gap-2'>
                    <input type="text" name="from_name" placeholder="Name" required className='input input-sm w-full' />
                    <input type="email" name="from_email" placeholder="Email" required className='input input-sm w-full' />
                    <textarea name="message" placeholder="Message" required className='input input-sm h-42 w-full'></textarea>
                </div>

                <div className="flex gap-2 justify-end">
                    <button disabled={submitting} className="btn btn-sm" type="button" onClick={() => setShow(false)}>Close</button>
                    <button disabled={submitting} type="submit" className='btn btn-sm btn-primary'>
                        {submitting ? <>Sending <i className="pi pi-spinner pi-spin"></i></> : <>Send</>}
                    </button>
                </div>

            </div>


        </form>
    </>
}
