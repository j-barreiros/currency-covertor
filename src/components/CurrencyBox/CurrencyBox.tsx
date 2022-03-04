import React, { useEffect, useState } from 'react'

type CurrencyBox = {
    amount: number;
}

export default function CurrencyBox(props: CurrencyBox) {

    const { amount } = props;

    const [selectedCurrency, setSelectedCurrency] = useState('');

    let amountConverted = 0;

    useEffect(() => {
        //Convert ammount based on the selectedCurrency
        amountConverted = amount * 2;
    }, [amount])


    function handleCurrencyChange(event:any) {
        setSelectedCurrency(event.target.value)
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
            <h2>{amountConverted}</h2>
        </article>
    )
}
