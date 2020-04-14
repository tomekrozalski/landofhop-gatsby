import React, { useContext } from 'react';

import SEO from 'components/Seo';
import { BeverageContext } from 'components/BeverageDetails/utils/contexts';

const BeverageDetailsSeo: React.FC = () => {
  const { brand, name } = useContext(BeverageContext);

  return (
    <SEO
      title="beverageDetails"
      values={{
        brand: brand.name.value,
        name: name.value,
      }}
    />
  );
};

export default BeverageDetailsSeo;
