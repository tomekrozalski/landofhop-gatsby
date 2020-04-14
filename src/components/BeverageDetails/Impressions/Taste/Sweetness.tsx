import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import isNumber from 'lodash/isNumber';

import { BeverageContext } from 'components/BeverageDetails/utils/contexts';
import { Progress } from '.';

const Sweetness: React.FC = () => {
  const { sweetness } = useContext(BeverageContext);

  return sweetness ? (
    <>
      <dt>
        <FormattedMessage id="beverage.details.sweetness" />
      </dt>
      <dd>
        {isNumber(sweetness.label) && (
          <Progress value={sweetness.label}>{sweetness.label}%</Progress>
        )}
        {isNumber(sweetness.producer) && (
          <Progress value={sweetness.producer} producer>
            {sweetness.producer}%
          </Progress>
        )}
      </dd>
    </>
  ) : null;
};

export default Sweetness;
