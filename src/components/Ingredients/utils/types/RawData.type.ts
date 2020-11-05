import { Beverage } from './Beverage.type';
import { Ingredient } from './Ingredient.type';

export type RawData = {
  allBeverage: {
    edges: {
      node: Beverage;
    }[];
  };
  allIngredient: {
    edges: {
      node: Ingredient;
    }[];
  };
};
