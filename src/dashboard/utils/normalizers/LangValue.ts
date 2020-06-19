import { LanguageValue as LanguageValueTypes } from '../types';

const LangValue = (formatMessage: ({ id }: { id: string }) => string) => ({
  language,
  value,
}: LanguageValueTypes) => ({
  lang:
    language !== ''
      ? {
          label: value,
          value: language as string,
        }
      : '',
  value,
});

export default LangValue;
