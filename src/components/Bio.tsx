import { useContext, useEffect } from 'react'
import { AppContext } from '@/context/AppContextProvider';
import Card from '@/components/Card';
import useQuote from '@/hooks/useQuote';

export const ID_BIO = "bio";

export default function Bio() {

    const { setMenuVisibility } = useContext(AppContext);
    const { quote } = useQuote();

    useEffect(() => {
        setMenuVisibility(ID_BIO, quote !== null);
    }, [quote]);

    return <>
        {quote && <Card title='💬 Bio' id={ID_BIO}>
            <em>“{quote.q}”</em>
            <strong>-{quote.a}</strong>
        </Card>}
    </>
}