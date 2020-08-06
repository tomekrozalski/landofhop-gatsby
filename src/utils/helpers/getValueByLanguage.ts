import { ExtendedLanguageValue } from '../types';
import { SiteLanguage } from '../enums';

export default (
  values: ExtendedLanguageValue[],
  language: string | SiteLanguage = SiteLanguage.pl,
) => values.find(item => item?.language === language) || values[0];
