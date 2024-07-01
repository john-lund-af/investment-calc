import { Investment } from './common.types';
import { Dispatch, SetStateAction } from 'react';

export type FormProps = {
  investment: Investment | undefined,
  onInvestmentChange: Dispatch<SetStateAction<Investment>>;
}

export type ResultTableProps = {
  investment: Investment
}