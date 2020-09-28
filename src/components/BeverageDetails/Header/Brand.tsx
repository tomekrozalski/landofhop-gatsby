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
  const { brand, contract, isContract } = useContext(BeverageContext);

  return (
    <FormattedMessage
      id="beverage.details.brand"
      values={{
        prefix: contract || isContract ? 'contract' : '',
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
