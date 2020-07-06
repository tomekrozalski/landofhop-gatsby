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
    },
    ...rest,
  };
};

export default translateBeverage;
