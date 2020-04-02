import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { BeverageContext } from 'utils/contexts';
import { SourceItem } from 'components/BeverageDetails/elements';

const Barcode: React.FC = () => {
  const { barcode } = useContext(BeverageContext);

  return barcode ? (
    <>
      <dt>
        <FormattedMessage id="beverage.details.barcode" />
      </dt>
      <dd>
        <SourceItem>{barcode}</SourceItem>
      </dd>
    </>
  ) : null;
};

export default Barcode;
