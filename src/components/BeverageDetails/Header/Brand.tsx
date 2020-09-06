import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { getLangAttr } from 'utils/helpers';
import { BeverageContext } from 'components/BeverageDetails/utils/contexts';
import {
  Label,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

const Brand: React.FC = () => {
  const { brand, contract, cooperation, isContract } = useContext(
    BeverageContext,
  );

  const setPrefix = () => {
    if (cooperation) {
      return 'cooperation';
    }

    if (contract) {
      return 'contract';
    }

    if (isContract) {
      return 'isContract';
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
