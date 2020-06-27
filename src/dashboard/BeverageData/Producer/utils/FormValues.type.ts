import { Lang } from 'dashboard/utils/types/form';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';

export type FormValues = {
  // -----------
  [FieldName.tale]:
    | {
        lang: Lang;
        value: string;
      }[]
    | [];
};
