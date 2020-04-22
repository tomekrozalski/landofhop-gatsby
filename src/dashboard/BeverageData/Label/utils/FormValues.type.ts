import { DataLanguage } from 'utils/enums';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';

type LangType =
  | {
      label?: DataLanguage | string;
      value: string;
    }
  | string;

export type FormValues = {
  [FieldName.badge]: string;
  // -----------
  [FieldName.name]: { lang: LangType; value: string }[];
  [FieldName.series]: {
    lang: LangType;
    value: string;
  }[];
  [FieldName.brand]: {
    label: string;
    value: string;
  } | null;
  [FieldName.cooperation]:
    | {
        label: string;
        value: string;
      }[]
    | null;
};
