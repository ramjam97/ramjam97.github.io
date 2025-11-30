import { useContext, useEffect } from 'react';
import { AppContext } from '@/context/AppContextProvider';
import Card from '@/components/Card';

export const ID_INTERESTS = "interests";

export default function Interests() {

    const { data, setMenuVisibility } = useContext(AppContext);

    const interests = data.interests || [];

    useEffect(() => {
        setMenuVisibility(ID_INTERESTS, interests.length > 0);
    }, []);

    return <>
        {interests.length > 0 &&
            <Card title='🎨 Interests' id={ID_INTERESTS}>
                <div className='flex flex-wrap gap-1 mb-1'>
                    {interests.map((item, index) => <span className="badge badge-neutral" key={index}>{item}</span>)}
                </div>
            </Card>
        }
    </>
}