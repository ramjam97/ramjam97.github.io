import { useContext, useEffect, useMemo } from 'react';
import { AppContext } from '@/context/AppContextProvider';
import Card from '@/components/Card';
import type { MenuItemProps } from '@/hooks/useMenu';

export const COMP_CONTACTS: MenuItemProps = {
    id: 'contacts',
    name: 'Contacts',
    show: true
};

export default function Contact() {
    const { data, setMenuVisibility } = useContext(AppContext);

    const phone_numbers = data.phone_numbers || [];
    const emails = data.emails || [];

    const hasContent = useMemo(() => phone_numbers.length > 0 || emails.length > 0, [phone_numbers, emails]);

    useEffect(() => {
        setMenuVisibility(COMP_CONTACTS.id, hasContent);
    }, [hasContent]);

    return <>
        {hasContent &&
            <Card title={`📱 ${COMP_CONTACTS.name}`} id={COMP_CONTACTS.id}>
                <div className='flex flex-col gap-0 px-1'>
                    {phone_numbers.map((number, index) => <TelItem key={index} number={number} />)}
                    {emails.map((email, index) => <EmailItem key={index} email={email} />)}
                </div>
            </Card>
        }
    </>
}

const TelItem = ({ number }: { number: string }) => {
    return <>
        <span className='flex flex-row items-center gap-2'>
            <a href={`tel:${number}`} className='flex items-center gap-2'>
                <i className='pi pi-phone'></i>
                <span>{number}</span>
            </a>
        </span>
    </>
}

const EmailItem = ({ email }: { email: string }) => {
    return <>
        <span className='flex flex-row items-center gap-2'>
            <a href={`mailto:${email}`} className='flex items-center gap-2'>
                <i className='pi pi-envelope'></i>
                <span>{email}</span>
            </a>
        </span>
    </>
}