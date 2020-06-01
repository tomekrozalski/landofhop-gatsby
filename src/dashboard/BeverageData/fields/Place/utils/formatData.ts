import isNumber from 'lodash/isNumber';

import { PlaceInput, PlaceOutput } from 'dashboard/utils/types/form';

const formatData = ({
  city,
  country,
  institution,
  latitude,
  longitude,
}: PlaceInput): PlaceOutput => ({
  city: city.map(({ lang, value }) => ({ lang: lang.value, value })),
  country: country.value,
  institution: institution.value,
  ...(isNumber(latitude) && { latitude }),
  ...(isNumber(longitude) && { longitude }),
});

export default formatData;
