import isNumber from 'lodash/isNumber';

export type Input = {
  city: {
    lang: {
      label: string;
      value: string;
    };
    value: string;
  }[];
  country: {
    label: string;
    value: string;
  };
  institution: {
    label: string;
    value: string;
  };
  latitude: number | null;
  longitude: number | null;
};

type Output = {
  city: {
    lang: string;
    value: string;
  }[];
  country: string;
  institution: string;
  latitude?: number;
  longitude?: number;
};

const formatData = ({
  city,
  country,
  institution,
  latitude,
  longitude,
}: Input): Output => ({
  city: city.map(({ lang, value }) => ({ lang: lang.value, value })),
  country: country.value,
  institution: institution.value,
  ...(isNumber(latitude) && { latitude }),
  ...(isNumber(longitude) && { longitude }),
});

export default formatData;
