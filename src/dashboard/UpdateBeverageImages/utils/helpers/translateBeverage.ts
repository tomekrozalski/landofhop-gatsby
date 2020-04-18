import { useIntl } from 'gatsby-plugin-intl';

import { getValueByLanguage } from 'utils/helpers';
import {
  Beverage as BeverageTypes,
  TranslatedBeverage as TranslatedBeverageTypes,
} from '../types';

const translateBeverage = ({
  name,
  brand,
  ...rest
}: BeverageTypes): TranslatedBeverageTypes => {
  const { locale } = useIntl();

  return {
    name: getValueByLanguage(name, locale),
    brand: {
      badge: brand.badge,
      name: getValueByLanguage(brand.name, locale),
      shortId: brand.shortId,
      website: brand.website,
      consortium: brand.consortium
        ? getValueByLanguage(brand.consortium, locale)
        : null,
    },
    ...rest,
  };
};

export default translateBeverage;
