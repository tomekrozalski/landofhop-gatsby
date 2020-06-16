import { LanguageValue } from '../types';
import { SiteLanguage } from '../enums';

type ExtendedLanguageValue = LanguageValue & { complete?: boolean };

export default (
  values: ExtendedLanguageValue[],
  language: string | SiteLanguage = SiteLanguage.pl,
) => values.find(item => item.language === language) || values[0];
