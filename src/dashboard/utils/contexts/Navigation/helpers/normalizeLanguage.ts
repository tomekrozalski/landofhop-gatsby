import { IntlShape } from 'react-intl';

import { SiteLanguage } from 'utils/enums';
import { getValueByLanguage } from 'dashboard/utils/helpers';
import { LanguageType } from '../..';

type FirstProps = {
  intl: IntlShape;
  languages: LanguageType[];
};

const normalizeLanguage = ({ languages, intl }: FirstProps) => ({
  language,
  ...rest
}: any) => {
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
    ...rest,
  };
};

export default normalizeLanguage;
