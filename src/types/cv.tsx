interface ContributionItem {
    description: string;
    extra_info?: string[];
}

export interface ExperienceItemProps {
    company: string;
    position: string;
    start_date: string;
    end_date: string;
    address: string;
    contributions: ContributionItem[];
}

export interface SkillItem {
    title: string;
    skills: string[];
}

export interface EducationItemProps {
    institution: string;
    degree: string;
    start_date: string;
    end_date: string;
    address: string;
}

export interface LinkItem {
    name: string;
    url: string;
    icon: string;
}

export type DetailsProps = {
    name: string;
    roles: string[];
    about: string;
    address: string;
    phone_numbers: string[];
    emails: string[];
    links: LinkItem[];
    technical_skills: SkillItem[];
    experience: ExperienceItemProps[];
    education: EducationItemProps[];
}