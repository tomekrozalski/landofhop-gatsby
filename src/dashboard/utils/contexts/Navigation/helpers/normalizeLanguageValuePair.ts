import { IntlShape } from 'react-intl';

import { SiteLanguage } from 'utils/enums';
import { LanguageValue as LanguageValueType } from 'dashboard/utils/types';
import { getValueByLanguage } from 'dashboard/utils/helpers';
import { LanguageType } from '../..';

type FirstProps = {
  intl: IntlShape;
  languages: LanguageType[];
};

const normalizeLanguageValuePair = ({ languages, intl }: FirstProps) => ({
  language,
  value,
}: LanguageValueType) => {
  const getLanguageLabelById = (languageId: string) => {
    const name = languages.find(({ id }) => id === languageId)?.name;

    return name
      ? getValueByLanguage(name, intl.locale as SiteLanguage).value
      : '';
  };

  const getLabelByLanguageId = (languageId: string | undefined) => {
    switch (languageId) {
      case '':
        return '';
      case undefined:
        return intl.formatMessage({ id: 'language.none' });
      default:
        return getLanguageLabelById(languageId);
    }
  };

  return {
    lang: {
      label: getLabelByLanguageId(language),
      value: language || 'none',
    },
    value,
  };
};

export default normalizeLanguageValuePair;
