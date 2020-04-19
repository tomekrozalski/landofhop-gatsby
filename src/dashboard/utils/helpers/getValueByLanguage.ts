import { SiteLanguage } from 'utils/enums';

import { LanguageValue } from '../types';

export default (
  values: LanguageValue[],
  language: SiteLanguage = SiteLanguage.pl,
) => values.find(item => item.language === language) || values[0];
