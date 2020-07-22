import { IngredientType as IngredientTypeEnum } from 'components/BeverageDetails/utils/enums';
import { LanguageValue } from 'dashboard/utils/types';

export type IngredientType = {
  badge: string;
  name: LanguageValue[];
  type: IngredientTypeEnum;
  id: string;
};
