import { Currency } from 'components/BeverageDetails/utils/enums';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';

export type FormValues = {
  // -----------
  [FieldName.price]: {
    currency: {
      label: string;
      value: Currency;
    };
    date: string;
    value: number;
  }[];
  [FieldName.added]: string | null;
  [FieldName.updated]: string | null;
  [FieldName.notes]: string | null;
};
