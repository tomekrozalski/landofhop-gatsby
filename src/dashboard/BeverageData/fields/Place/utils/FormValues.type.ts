import { Lang } from 'dashboard/utils/types/form';
import { PlaceFieldNames as FieldName } from 'dashboard/utils/enums';

export type FormValues = {
  [FieldName.city]: { lang: Lang; value: string }[];
  [FieldName.country]:
    | {
        label: string;
        value: string;
      }
    | string;
  [FieldName.institution]:
    | {
        label: string;
        value: string;
      }
    | string;
  [FieldName.longitude]: number | null;
  [FieldName.latitude]: number | null;
};
