import { IngredientType as IngredientTypeEnum } from 'components/BeverageDetails/utils/enums';

export type IngredientInput = {
  badge: string;
  name: {
    lang: {
      label: string;
      value: string;
    };
    value: string;
  }[];
  type: {
    label: string;
    value: IngredientTypeEnum;
  };
};

export type IngredientOutput = {
  badge: string;
  name: {
    lang: string;
    value: string;
  }[];
  type: IngredientTypeEnum;
};
