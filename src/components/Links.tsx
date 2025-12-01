import { useContext, useEffect } from 'react';
import { AppContext } from '@/context/AppContextProvider';
import Card from '@/components/Card';
import type { MenuItemProps } from '@/hooks/useMenu';

export const COMP_LINKS: MenuItemProps = {
    id: 'links',
    name: 'Connect With Me',
    show: true
};

export default function Links() {

    const { data, setMenuVisibility } = useContext(AppContext);

    const links = data.links || [];

    useEffect(() => {
        setMenuVisibility(COMP_LINKS.id, links.length > 0);
    }, []);

    return <>
        {links.length > 0 &&
            <Card title={`🤝 ${COMP_LINKS.name}`} id={COMP_LINKS.name}>
                <div className='flex flex-col gap-0 px-1'>
                    {links.map((link, index) => <ContactItem key={index} icon={link.icon} url={link.url} />)}
                </div>
            </Card>
        }
    </>
}

const ContactItem = ({ icon, url }: { icon: string, url: string }) => {
    return <>
        <span className='flex flex-row items-center gap-2'>
            <i className={icon}></i>
            <a href={url} target='_blank' className='link link-hover break-all'>{url}</a>
        </span>
    </>
}