import { SiteLanguage, SiteLanguageId } from 'utils/enums';
import { LanguageValue } from '../types';

export default (values: LanguageValue[], language: SiteLanguage) =>
  values.find(item => item.language === SiteLanguageId[language]) || values[0];
