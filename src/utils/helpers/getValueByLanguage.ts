import LanguageValueType from '../types/LanguageValue.type';
import SiteLanguage from '../enums/SiteLanguage.enum';

export default (values: LanguageValueType[], language: SiteLanguage) =>
  values.find(item => item.language === language) || values[0];
