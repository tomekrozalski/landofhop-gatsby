import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { BeverageContext } from 'components/BeverageDetails/utils/contexts';

const Clarity: React.FC = () => {
  const { clarity } = useContext(BeverageContext);

  return clarity && clarity.editorial ? (
    <>
      <dt>
        <FormattedMessage id="beverage.details.clarity.name" />
      </dt>
      <dd>
        <FormattedMessage
          id={`beverage.details.clarity.${clarity.editorial}`}
        />
      </dd>
    </>
  ) : null;
};

export default Clarity;
