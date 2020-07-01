import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';

export type FormValues = {
  // -----------
  [FieldName.added]: string | null;
  [FieldName.updated]: string | null;
  [FieldName.notes]: string | null;
};
