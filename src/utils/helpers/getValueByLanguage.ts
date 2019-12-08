import LanguageValueType from '../types/LanguageValue.type';
import SiteLanguages from '../enums/SiteLanguages.enum';

export default (values: LanguageValueType[], language: SiteLanguages) =>
  values.find(item => item.language === language) || values[0];
