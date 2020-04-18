import { LanguageValue } from '../../types';

export type Institution = {
  badge: string;
  name: LanguageValue[];
  shortId: string;
  website?: string;
  consortium?: LanguageValue[];
};
