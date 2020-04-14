import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { BeverageContext } from 'utils/contexts';
import { getLangAttr } from 'utils/helpers';

import {
  Label,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

const Brand: React.FC = () => {
  const { brand, contract, cooperation } = useContext(BeverageContext);

  const setPrefix = () => {
    if (cooperation) {
      return 'cooperation';
    }

    if (contract) {
      return 'contract';
    }

    return false;
  };

  return (
    <FormattedMessage
      id="beverage.details.brand"
      values={{
        prefix: setPrefix(),
        brand: (
          <SourceGroup>
            <Label>
              <SourceItem lang={getLangAttr(brand.name.language)}>
                {brand.name.value}
              </SourceItem>
            </Label>
          </SourceGroup>
        ),
      }}
    />
  );
};

export default Brand;
