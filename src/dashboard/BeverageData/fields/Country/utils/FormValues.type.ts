import { DataLanguage } from 'utils/enums';
import { CountryFieldNames as FieldName } from 'dashboard/utils/enums';

type LangType =
  | {
      label?: DataLanguage | string;
      value: string;
    }
  | string;

export type FormValues = {
  [FieldName.code]: string;
  [FieldName.name]: { lang: LangType; value: string }[];
};
