import { useContext, useEffect } from 'react'
import { AppContext } from '@/App';
import Card from '@/components/Card';

export const ID_BIO = "bio";

export default function Bio() {
    const { quote, setMenuVisibility } = useContext(AppContext);

    useEffect(() => {
        setMenuVisibility(ID_BIO, quote !== null);
    }, [quote]);

    return <>
        {quote && <Card title='💬 Bio' id={ID_BIO}>
            <em>"{quote.q}"</em>
            <strong>-{quote.a}</strong>
        </Card>}
    </>
}