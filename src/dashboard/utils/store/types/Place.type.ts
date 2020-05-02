import { LanguageValue } from 'dashboard/utils/types';

export type Place = {
  city: LanguageValue[];
  coordinates?: number[];
  country: LanguageValue[];
  id: string;
  institution: LanguageValue[];
};
