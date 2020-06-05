import { LanguageValue } from 'dashboard/utils/types';

export type PlaceType = {
  city?: LanguageValue[];
  coordinates?: number[];
  country: LanguageValue[];
  id: string;
  institution: LanguageValue[];
};
