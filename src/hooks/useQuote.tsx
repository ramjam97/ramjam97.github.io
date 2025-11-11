import { useEffect, useState } from 'react'
import quotesList from '@/assets/quotes.json';
export type QuoteType = {
    id: number;
    q: string;
    a: string;
}

export default function useQuote() {

    const [quote, setQuote] = useState<QuoteType>(null);

    const getRandomQuote = () => {
        const randomQuote = quotesList[Math.floor(Math.random() * quotesList.length)];
        setQuote(randomQuote as QuoteType);
    };

    useEffect(() => {
        getRandomQuote();
    }, []);

    return { quote }
}