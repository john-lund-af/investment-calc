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

  const allValuesFilled = Object.values(investment).every(value => value && !isNaN(value));

  return (
    <main>
      <Header />
      <Form investment={investment} onInvestmentChange={setInvestment} />
      {allValuesFilled && <ResultTable investment={investment} />}
    </main>
  )
}

export default App
