import { FormProps } from '../types/component.types';
import { useState, ChangeEvent } from 'react';

interface FormData {
  initialInvestment: string,
  annualInvestment: string,
  expectedReturn: string,
  duration: string
}


export default function Form({ onInvestmentChange }: FormProps) {

  const [formData, setFormData] = useState<FormData>({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: ""
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    const propName = event.target.name;
    setFormData(current => ({ ...current, [propName]: value }))
  }

  const allInputsContainNumbers = Object.values(formData).every(value => value && !isNaN(value));

  if (allInputsContainNumbers) {
    onInvestmentChange({
      initialInvestment: +formData.initialInvestment,
      annualInvestment: +formData.annualInvestment,
      expectedReturn: +formData.expectedReturn,
      duration: +formData.duration
    });
  }

  return <form id="form">
    <div className="form-group">
      <label htmlFor="initial">Initial Investment</label>
      <input value={formData.initialInvestment} onChange={handleChange} type="number" name="initialInvestment" id="initial" />
    </div>
    <div className="form-group">
      <label htmlFor="annual">Annual Investment</label>
      <input value={formData.annualInvestment} onChange={handleChange} type="number" name="annualInvestment" id="annual" />
    </div>
    <div className="form-group">
      <label htmlFor="expected">Expected Return</label>
      <input value={formData.expectedReturn} onChange={handleChange} type="number" name="expectedReturn" id="expected" />
    </div>
    <div className="form-group">
      <label htmlFor="duration">Duration</label>
      <input value={formData.duration} onChange={handleChange} type="number" name="duration" id="duration" />
    </div>
  </form>
}