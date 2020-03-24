import { Currency } from '../enums/beverage';

export type BeveragePrice = {
  date: Date;
  value: number;
  currency: Currency;
};
