import { useContext, useEffect, useMemo } from 'react';
import { AppContext } from '@/App';
import Card from '@/components/Card';

export const ID_CONTACTS = "contacts";

const Contact = () => {

    const { data, setMenuVisibility } = useContext(AppContext);

    const phone_numbers = data.phone_numbers || [];
    const emails = data.emails || [];

    const hasContent = useMemo(() => phone_numbers.length > 0 || emails.length > 0, [phone_numbers, emails]);

    useEffect(() => {
        setMenuVisibility(ID_CONTACTS, hasContent);
    }, [hasContent]);

    return <>
        {hasContent &&
            <Card title='📱 Contacts' id={ID_CONTACTS}>
                <div className='flex flex-col gap-0 px-1'>
                    {phone_numbers.map((number, index) => <ContactItem key={index} icon='pi pi-phone' text={number} />)}
                    {emails.map((email, index) => <ContactItem key={index} icon='pi pi-envelope' text={email} />)}
                </div>
            </Card>
        }
    </>
}

export default Contact;


const ContactItem = ({ icon, text }: { icon: string, text: string }) => {
    return <>
        <span className='flex flex-row items-center gap-2'>
            <i className={icon}></i>
            <span>{text}</span>
        </span>
    </>
}