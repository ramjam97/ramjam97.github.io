interface ContributionItem {
    description: string;
    extra_info?: string[];
}

export type DateString = string | 'present';
export type DateDisplayFormat = string | 'month-year' | 'year-only';

export interface ExperienceItemProps {
    company: string;
    position: string;
    start_date: DateString;
    end_date: DateString;
    display_date: DateDisplayFormat;
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
    url: string;
    start_date: DateString;
    end_date: DateString;
    display_date: DateDisplayFormat;
    address: string;
}

export interface CertificateItemProps {
    title: string;
    issuer: string;
    url: string;
    date: DateString;
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
    interests: string[];
    certificates: CertificateItemProps[];
    address: string;
    phone_numbers: string[];
    emails: string[];
    links: LinkItem[];
    technical_skills: SkillItem[];
    experience: ExperienceItemProps[];
    education: EducationItemProps[];
}