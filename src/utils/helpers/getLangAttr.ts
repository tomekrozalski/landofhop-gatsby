import { useIntl } from 'gatsby-plugin-intl';

const getLangAttr = (language: string | null) => {
  const { locale } = useIntl();

  if (language && language !== locale) {
    return language;
  }

  return null;
};

export default getLangAttr;
