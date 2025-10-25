import { useState } from 'react';
import { ID_EXPERIENCE } from '@/components/Experience';
import { ID_ABOUT } from '@/components/About';
import { ID_CONTACTS } from '@/components/Contact';
import { ID_LINKS } from '@/components/Links';
import { ID_SKILLS } from '@/components/Skills';
import { ID_PROFILE } from '@/components/Profile';
import { ID_EDUCATION } from '@/components/Education';

export interface MenuItemProps {
    id: string;
    name: string;
    show: boolean;
}

const useMenu = (): [MenuItemProps[], (id: string, isShow: boolean) => void] => {

    const [menu, setMenu] = useState<MenuItemProps[]>([
        { id: ID_PROFILE, name: 'Profile', show: true },
        { id: ID_ABOUT, name: 'About', show: true },
        { id: ID_CONTACTS, name: 'Contacts', show: true },
        { id: ID_LINKS, name: 'Connect With Me', show: true },
        { id: ID_SKILLS, name: 'Skills', show: true },
        { id: ID_EXPERIENCE, name: 'Experience', show: true },
        { id: ID_EDUCATION, name: 'Education', show: true },
    ]);

    const setMenuVisibility = (id: string, isShow: boolean) => {
        setMenu(menu.map(item => item.id === id ? { ...item, show: isShow } : item))
    };

    return [menu, setMenuVisibility];
}

export default useMenu