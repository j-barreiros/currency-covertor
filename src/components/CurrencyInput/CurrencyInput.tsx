import React, { useState } from 'react'

type CurrencyInputPops = {
    setAmount(amount: number): any
    setBaseCurrency(currency:string):void
}

export default function CurrencyInput(props: CurrencyInputPops) {

    const { setAmount, setBaseCurrency } = props;

    function handleCurrencyChange(event: any) {
        setBaseCurrency(event.target.value)
    }

    function handleAmountChange(event:any) {
        setAmount(parseFloat(event.target.value === '' ? 0 : event.target.value ))
    }  

    return (
        <>
            <input
                type='number'
                onChange={(event) => handleAmountChange(event)}
            ></input>
            <select
                name='currencies'
                onChange={(event) => handleCurrencyChange(event)}
            >
                <option value='BRL'>BRL</option>
                <option value='USD'>USD</option>
                <option value='EUR'>EUR</option>
            </select>
        </>

    )
}
