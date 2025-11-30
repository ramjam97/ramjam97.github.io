import { useContext } from 'react'
import { AppContext } from '@/context/AppContextProvider';
import Card from '@/components/Card';

export const ID_ABOUT = "about";

export default function About() {
    const { data } = useContext(AppContext);
    return <Card title='📖 About' id={ID_ABOUT}><p>{data.about}</p></Card>
}