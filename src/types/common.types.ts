
export interface Investment {
  initialInvestment: number,
  annualInvestment: number,
  expectedReturn: number,
  duration: number
}

export interface Result {
  year: number,
  interest: number,
  valueEndOfYear: number,
  annualInvestement: number
}