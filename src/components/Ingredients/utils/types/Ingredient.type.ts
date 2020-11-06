import { LanguageValue } from 'utils/types';
import { IngredientType } from 'components/BeverageDetails/utils/enums';

export type Ingredient = {
  badge: string;
  id: string;
  parent: {
    id: string;
  } | null;
  type: IngredientType;
  name: LanguageValue[];
};
