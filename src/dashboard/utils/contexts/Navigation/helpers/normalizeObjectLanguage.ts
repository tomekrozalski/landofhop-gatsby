import { IntlShape } from 'react-intl';

import { SiteLanguage } from 'utils/enums';
import { getValueByLanguage } from 'dashboard/utils/helpers';
import { LanguageType } from '../..';

type FirstProps = {
  intl: IntlShape;
  languages: LanguageType[];
};

type SecondProps = {
  id: string;
  name: { language?: string; value: string }[];
};

const normalizeObjectLanguage = ({ languages, intl }: FirstProps) => ({
  id,
  name: brandName,
}: SecondProps) => {
  const normalizedNames = brandName.map(({ language, value }) => ({
    language: language
      ? languages.find(({ id: langId }) => langId === language)?.code
      : 'none',
    value,
  }));

  return {
    label: getValueByLanguage(normalizedNames, intl.locale as SiteLanguage)
      .value,
    value: id,
  };
};

export default normalizeObjectLanguage;
