import { Investment } from './common.types';

export type FormProps = {
  onInvestmentChange: (currentInvestment: Investment) => void
}