import { ContainerType } from 'components/BeverageDetails/utils/enums';
import { LanguageValue } from 'dashboard/utils/types';

export type TranslatedBeverage = {
  id: string;
  shortId: string;
  badge: string;
  name: LanguageValue;
  brand: {
    badge: string;
    name: LanguageValue;
  };
  photos?: {
    cap: boolean | null;
    cover?: {
      height: number;
      width: number;
    };
    gallery?: number;
    outlines?: {
      cover?: string;
      gallery?: string;
    };
  };
  container: {
    type: ContainerType;
  };
};
