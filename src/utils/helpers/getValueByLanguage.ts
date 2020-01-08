import { LanguageValue } from '../types';
import { DataLanguage, SiteLanguage } from '../enums';

type ExtendedLanguageValue = LanguageValue & { complete?: boolean };

export default (
  values: ExtendedLanguageValue[],
  language: DataLanguage | SiteLanguage = SiteLanguage.pl,
) => values.find(item => item.language === language) || values[0];

