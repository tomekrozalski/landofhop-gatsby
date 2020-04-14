import { Currency } from '../enums';

export type BeveragePrice = {
  date: Date;
  value: number;
  currency: Currency;
};
