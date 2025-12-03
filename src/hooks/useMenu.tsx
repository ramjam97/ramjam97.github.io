import { useState } from 'react';
import { COMP_EXPERIENCE } from '@/components/experience/Experience';
import { COMP_ABOUT } from '@/components/About';
import { COMP_CONTACTS } from '@/components/Contact';
import { COMP_LINKS } from '@/components/Links';
import { COMP_INTERESTS } from '@/components/Interests';
import { COMP_SKILLS } from '@/components/skills/Skills';
import { COMP_PROFILE } from '@/components/Profile';
import { COMP_EDUCATION } from '@/components/education/Education';
import { COMP_BIO } from '@/components/Bio';
import { COMP_CERTIFICATES } from '@/components/certificate/Certificates';

export interface MenuItemProps {
    id: string;
    name: string;
    show: boolean;
}

export default function useMenu(): [MenuItemProps[], (id: string, isShow: boolean) => void] {

    const [menu, setMenu] = useState<MenuItemProps[]>([
        COMP_PROFILE,
        COMP_BIO,
        COMP_ABOUT,
        COMP_CONTACTS,
        COMP_LINKS,
        COMP_INTERESTS,
        COMP_SKILLS,
        COMP_EXPERIENCE,
        COMP_EDUCATION,
        COMP_CERTIFICATES
    ]);

    const setMenuVisibility = (id: string, isShow: boolean) => {
        setMenu(menu.map(item => item.id === id ? { ...item, show: isShow } : item))
    };

    return [menu, setMenuVisibility];
}