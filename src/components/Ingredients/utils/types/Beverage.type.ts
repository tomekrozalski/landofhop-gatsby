import { LanguageValue } from 'utils/types';

export type Beverage = {
  brand: {
    name: LanguageValue[];
    badge: string;
    shortId: string;
  };
  badge: string;
  name: LanguageValue[];
  ingredientsList: {
    label:
      | {
          id: string;
        }[]
      | null;
    producer:
      | {
          id: string;
        }[]
      | null;
  } | null;
};
