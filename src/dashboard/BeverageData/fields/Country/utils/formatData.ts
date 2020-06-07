import { CountryInput, CountryOutput } from 'dashboard/utils/types/form';

const formatData = ({ code, name }: CountryInput): CountryOutput => ({
  code,
  name: name.map(({ lang, value }) => ({ lang: lang.value, value })),
});

export default formatData;
