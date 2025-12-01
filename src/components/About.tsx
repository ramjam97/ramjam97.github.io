import { useContext } from 'react'
import { AppContext } from '@/context/AppContextProvider';
import Card from '@/components/Card';
import type { MenuItemProps } from '@/hooks/useMenu';

export const COMP_ABOUT: MenuItemProps = {
    id: 'about',
    name: 'About',
    show: true
};

export default function About() {
    const { data } = useContext(AppContext);
    return <Card title={`📜 ${COMP_ABOUT.name}`} id={COMP_ABOUT.id}><p>{data.about}</p></Card>
}