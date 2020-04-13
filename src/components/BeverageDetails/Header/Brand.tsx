import React, { useContext } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

import { BeverageContext } from 'utils/contexts';
import { getLangAttr, getValueByLanguage } from 'utils/helpers';

import {
  Label,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

const Brand: React.FC = () => {
  const { locale } = useIntl();
  const { brand, contract, cooperation } = useContext(BeverageContext);
  const { language, value } = getValueByLanguage(brand.name, locale);

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
              <SourceItem lang={getLangAttr(language)}>{value}</SourceItem>
            </Label>
          </SourceGroup>
        ),
      }}
    />
  );
};

export default Brand;
