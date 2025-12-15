import { getWeekId } from "@/utils/universal";
import { useEffect, useState } from "react"

export type ContactFormProps = {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    emailSent: boolean;
    setEmailSent: React.Dispatch<React.SetStateAction<boolean>>;
}

const SENT_EMAIL_KEY = 'email-sent-' + getWeekId();

export default function useContactForm() {

    const [show, setShow] = useState<boolean>(false);
    const [emailSent, setEmailSent] = useState<boolean>(localStorage.getItem(SENT_EMAIL_KEY) === '1');

    useEffect(() => {
        if (emailSent) localStorage.setItem(SENT_EMAIL_KEY, emailSent ? '1' : '0');
    }, [emailSent]);

    return {
        show, setShow,
        emailSent, setEmailSent
    }
}