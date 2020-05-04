import { DataLanguage } from 'utils/enums';
import { PlaceFieldNames as FieldName } from 'dashboard/utils/enums';

type LangType =
  | {
      label?: DataLanguage | string;
      value: string;
    }
  | string;

export type FormValues = {
  [FieldName.city]: { lang: LangType; value: string }[];
};
