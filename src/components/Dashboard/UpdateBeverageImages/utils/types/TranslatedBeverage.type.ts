import { ContainerType } from 'utils/enums/beverage';
import { InstitutionTranslated, LanguageValue } from 'utils/types';

export type TranslatedBeverage = {
  id: string;
  shortId: string;
  badge: string;
  name: LanguageValue;
  brand: InstitutionTranslated;
  photos: {
    cover: {
      height: number;
      width: number;
    } | null;
    gallery?: number;
    outlines: {
      cover?: string;
      gallery?: string;
    } | null;
  } | null;
  container: {
    type: ContainerType;
  };
};
