import { DataLanguage } from 'utils/enums';
import { FieldName, FormType } from '../../utils/enums';

type LangType =
  | {
      label: DataLanguage | null | string;
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
  [FieldName.formType]: FormType;
};
