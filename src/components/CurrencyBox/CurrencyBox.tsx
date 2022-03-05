import React, { useEffect, useState } from 'react'

type CurrencyBox = {
    amount: number;
    baseCurrency: string;
    initialCurrency: string;
}

export default function CurrencyBox(props: CurrencyBox) {

    const { amount, baseCurrency, initialCurrency } = props;

    const [selectedCurrency, setSelectedCurrency] = useState(initialCurrency);
    const [amountConverted, setAmountConverted] = useState(0);
    const [conversionValue, setConversionValue] = useState(1);

    useEffect(() => {
        console.log('api-call')
        fetch(`https://currency-exchange.p.rapidapi.com/exchange?from=${baseCurrency}&to=${selectedCurrency}&q=1.0`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
                "x-rapidapi-key": "8a892e37femsh477b97ca5502a89p19c737jsn987c1d56ddbf"
            }
        })
            .then((reponse) => reponse.json())
            .then((data) => setConversionValue(data))
    }, [baseCurrency, selectedCurrency])

    function handleCurrencyChange(event: any) {
        setSelectedCurrency(event.target.value);
    }

    return (
        <article className='currency-box'>
            <select
                name='currencies'
                onChange={(event) => handleCurrencyChange(event)}
            >
                <option value='BRL'>BRL</option>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
            </select>
            <h2>{(amount * conversionValue).toFixed(2)}</h2>
        </article>
    )
}
