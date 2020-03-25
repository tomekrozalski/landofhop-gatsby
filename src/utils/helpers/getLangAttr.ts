import { useIntl } from 'gatsby-plugin-intl';

import { DataLanguage } from 'utils/enums';

const getLangAttr = (language: DataLanguage | null) => {
  const { locale } = useIntl();

  if (language && language !== locale) {
    return language as DataLanguage;
  }

  return null;
};

export default getLangAttr;
