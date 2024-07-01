import { FormProps } from '../types/component.types';
import { ChangeEvent } from 'react';

export default function Form({ investment, onInvestmentChange }: FormProps) {


  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = Number(event.target.value);
    const propName = event.target.name;
    if (isNaN(value))
      return;

    onInvestmentChange((currentInvestment) => {
      return { ...currentInvestment, [propName]: value }
    })

  }

  return <form id="form">
    <div className="form-group">
      <label htmlFor="initial">Initial Investment</label>
      <input value={investment?.initialInvestment} onChange={handleChange} type="number" name="initialInvestment" id="initial" />
    </div>
    <div className="form-group">
      <label htmlFor="annual">Annual Investment</label>
      <input value={investment?.annualInvestment} onChange={handleChange} type="number" name="annualInvestment" id="annual" />
    </div>
    <div className="form-group">
      <label htmlFor="expected">Expected Return</label>
      <input value={investment?.expectedReturn} onChange={handleChange} type="number" name="expectedReturn" id="expected" />
    </div>
    <div className="form-group">
      <label htmlFor="duration">Duration</label>
      <input value={investment?.duration} onChange={handleChange} type="number" name="duration" id="duration" />
    </div>
  </form>
}