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
    outlines: {
      cover?: string;
    } | null;
  } | null;
  container: {
    type: ContainerType;
  };
};
