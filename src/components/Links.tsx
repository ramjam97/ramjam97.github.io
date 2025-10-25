import { useContext, useEffect } from 'react';
import { AppContext } from '@/App';
import Card from '@/components/Card';

export const ID_LINKS = "links";

const Links = () => {

    const { data, setMenuVisibility } = useContext(AppContext);

    const links = data.links || [];

    useEffect(() => {
        setMenuVisibility(ID_LINKS, links.length > 0);
    }, []);

    return <>
        {links.length > 0 &&
            <Card title='🤝 Connect With Me' id={ID_LINKS}>
                <div className='flex flex-col gap-0 px-1'>
                    {links.map((link, index) => <ContactItem key={index} icon={link.icon} url={link.url} />)}
                </div>
            </Card>
        }
    </>
}

export default Links;

const ContactItem = ({ icon, url }: { icon: string, url: string }) => {
    return <>
        <span className='flex flex-row items-center gap-2'>
            <i className={icon}></i>
            <a href={url} target='_blank' className='link link-hover'>{url}</a>
        </span>
    </>
}