import { LanguageValue } from 'dashboard/utils/types';

export type InstitutionType = {
  badge: string;
  id: string;
  name: LanguageValue[];
  shortId: string;
  website?: string;
  consortium?: LanguageValue[];
};
