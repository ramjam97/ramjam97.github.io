import { useContext, useEffect } from 'react'
import { AppContext } from '@/context/AppContextProvider';
import Card from '@/components/Card';
import useQuote from '@/hooks/useQuote';
import type { MenuItemProps } from '@/hooks/useMenu';

export const COMP_BIO: MenuItemProps = {
    id: 'bio',
    name: 'Bio',
    show: true
};

export default function Bio() {

    const { setMenuVisibility } = useContext(AppContext);
    const { quote } = useQuote();

    useEffect(() => {
        setMenuVisibility(COMP_BIO.id, quote !== null);
    }, [quote]);

    return <>
        {quote && <Card title={`💬 ${COMP_BIO.name}`} id={COMP_BIO.id}>
            <em>“{quote.q}”</em>
            <span className='font-semibold'>-{quote.a}</span>
        </Card>}
    </>
}