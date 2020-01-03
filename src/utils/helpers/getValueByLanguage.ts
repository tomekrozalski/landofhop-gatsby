import { LanguageValue } from '../types';
import { DataLanguage, SiteLanguage } from '../enums';

export default (
  values: LanguageValue[],
  language: DataLanguage | SiteLanguage = SiteLanguage.pl,
) => values.find(item => item.language === language) || values[0];

