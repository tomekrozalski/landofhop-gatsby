import { LanguageValue } from '.';

export type Institution = {
  badge: string;
  name: LanguageValue[];
  shortId: string;
  website: string | null;
  consortium: LanguageValue[] | null;
};
