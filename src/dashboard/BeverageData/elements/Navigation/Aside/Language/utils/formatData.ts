import { LanguageInput, LanguageOutput } from 'dashboard/utils/types/form';

const formatData = ({ code, name }: LanguageInput): LanguageOutput => ({
  code,
  name: name.map(({ lang, value }) => ({ lang: lang.value, value })),
});

export default formatData;
