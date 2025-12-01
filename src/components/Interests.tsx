import { useContext, useEffect } from 'react';
import { AppContext } from '@/context/AppContextProvider';
import Card from '@/components/Card';
import type { MenuItemProps } from '@/hooks/useMenu';

export const COMP_INTERESTS: MenuItemProps = {
    id: 'interests',
    name: 'Interests',
    show: true
};

export default function Interests() {

    const { data, setMenuVisibility } = useContext(AppContext);

    const interests = data.interests || [];

    useEffect(() => {
        setMenuVisibility(COMP_INTERESTS.id, interests.length > 0);
    }, []);

    return <>
        {interests.length > 0 &&
            <Card title={`🎨 ${COMP_INTERESTS.name}`} id={COMP_INTERESTS.id}>
                <div className='flex flex-wrap gap-1 mb-1'>
                    {interests.map((item, index) => <span className="badge badge-info" key={index}>{item}</span>)}
                </div>
            </Card>
        }
    </>
}