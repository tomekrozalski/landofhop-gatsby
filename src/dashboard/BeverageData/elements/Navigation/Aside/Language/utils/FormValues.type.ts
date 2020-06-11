import { Lang } from 'dashboard/utils/types/form';
import { LanguageFieldNames as FieldName } from 'dashboard/utils/enums';

export type FormValues = {
  [FieldName.code]: string;
  [FieldName.name]: { lang: Lang; value: string }[];
};
