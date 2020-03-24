import { useIntl } from 'gatsby-plugin-intl';

import { DataLanguage } from 'utils/enums';

const getLangAttr = (language: DataLanguage | null) => {
  const { locale } = useIntl();

  if (language && language !== locale) {
    return language;
  }

  return;
};

export default getLangAttr;
