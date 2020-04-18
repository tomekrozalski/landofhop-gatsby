import { ContainerType } from 'utils/enums/beverage';
import { Institution, LanguageValue } from 'utils/types';

export type Beverage = {
  id: string;
  shortId: string;
  badge: string;
  name: LanguageValue[];
  brand: Institution;
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
