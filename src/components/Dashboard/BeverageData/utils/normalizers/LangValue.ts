import { LanguageValue as LanguageValueTypes } from 'utils/types';
import { DataLanguage as DataLanguageEnum } from 'utils/enums';

const LangValue = (formatMessage: ({ id }: { id: string }) => string) => ({
  language,
  value,
}: LanguageValueTypes) => ({
  lang: {
    label: formatMessage({
      id: language ? `language.${language}` : 'language.none',
    }),
    value: language as DataLanguageEnum,
  },
  value,
});

export default LangValue;
