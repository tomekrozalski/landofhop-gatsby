import React, { useContext } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { getValueByLanguage } from 'utils/helpers';
import { BeverageContext } from 'utils/contexts';
import SEO from 'components/Seo';

const BeverageDetailsSeo: React.FC = () => {
  const { locale } = useIntl();
  const { brand, name } = useContext(BeverageContext);
  const translatedBrand = getValueByLanguage(brand.name, locale);
  const translatedName = getValueByLanguage(name, locale);

  return (
    <SEO
      title="beverageDetails"
      values={{
        brand: translatedBrand.value,
        name: translatedName.value,
      }}
    />
  );
};

export default BeverageDetailsSeo;
