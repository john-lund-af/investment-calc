import Header from './components/Header';
import Form from './components/Form';
import ResultTable from './components/ResultTable';
import { useState } from 'react';
import { Investment } from './types/common.types';

function App() {

  const [investment, setInvestment] = useState<Investment>({
    initialInvestment: 0,
    annualInvestment: 0,
    duration: 0,
    expectedReturn: 0
  });

  const inputIsValid = Object.values(investment).every(value => !isNaN(value)) && investment.duration > 0;

  return (
    <main>
      <Header />
      <Form investment={investment} onInvestmentChange={setInvestment} />
      {inputIsValid && <ResultTable investment={investment} />}
      {!inputIsValid && <p className="center">Fill all the values and use a duration greater than zero.</p>}
    </main>
  )
}

export default App
