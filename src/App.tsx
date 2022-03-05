import React, { useState } from 'react';
import './App.css';

//Components
import CurrencyBox from './components/CurrencyBox/CurrencyBox';
import CurrencyInput from './components/CurrencyInput/CurrencyInput';

function App() {
  const [amount, setAmount] = useState(0);
  const [baseCurrency, setBaseCurrency] = useState('BRL');

  return (
    <div>
      <CurrencyInput
        setAmount={setAmount}
        setBaseCurrency={setBaseCurrency}
      />
      <CurrencyBox
        amount={amount}
        baseCurrency={baseCurrency}
        initialCurrency='BRL'
      />

      <CurrencyBox
        amount={amount}
        baseCurrency={baseCurrency}
        initialCurrency='EUR'
      />

      <CurrencyBox
        amount={amount}
        baseCurrency={baseCurrency}
        initialCurrency='USD'
      />

      <CurrencyBox
        amount={amount}
        baseCurrency={baseCurrency}
        initialCurrency='BRL'
      />
    </div>
  );
}

export default App;
