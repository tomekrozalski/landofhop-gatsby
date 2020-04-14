import { LanguageValue } from 'utils/types';

export type InstitutionTranslated = {
  badge: string;
  name: LanguageValue;
  shortId: string;
  website: string | null;
  consortium: LanguageValue | null;
};
