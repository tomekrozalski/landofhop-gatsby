import { Lang } from 'dashboard/utils/types/form';
import { IngredientFieldNames as FieldName } from 'dashboard/utils/enums';

export type FormValues = {
  [FieldName.badge]: string;
  [FieldName.name]: { lang: Lang; value: string }[];
  [FieldName.type]: {
    label: string;
    value: string;
  };
};
