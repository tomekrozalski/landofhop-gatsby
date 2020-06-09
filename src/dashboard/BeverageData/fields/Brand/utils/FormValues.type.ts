import { Lang } from 'dashboard/utils/types/form';
import { InstitutionFieldNames as FieldName } from 'dashboard/utils/enums';

export type FormValues = {
  [FieldName.badge]: string;
  [FieldName.name]: { lang: Lang; value: string }[];
  [FieldName.ownedBy]:
    | {
        label: string;
        value: string;
      }
    | string
    | null;
  [FieldName.website]: string | null;
};
