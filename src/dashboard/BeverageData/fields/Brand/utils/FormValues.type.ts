import { DataLanguage } from 'utils/enums';
import { InstitutionFieldNames as FieldName } from 'dashboard/utils/enums';

type LangType =
  | {
      label?: DataLanguage | string;
      value: string;
    }
  | string;

export type FormValues = {
  [FieldName.badge]: string;
  [FieldName.name]: { lang: LangType; value: string }[];
  [FieldName.ownedBy]:
    | {
        label: string;
        value: string;
      }
    | string
    | null;
  [FieldName.website]: string;
};
