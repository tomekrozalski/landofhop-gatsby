import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import isNumber from 'lodash/isNumber';

import { BeverageContext } from 'components/BeverageDetails/utils/contexts';
import { Progress } from '.';

const Power: React.FC = () => {
  const { power } = useContext(BeverageContext);

  return power ? (
    <>
      <dt>
        <FormattedMessage id="beverage.details.power" />
      </dt>
      <dd>
        {isNumber(power.label) && (
          <Progress value={power.label}>{power.label}%</Progress>
        )}
        {isNumber(power.producer) && (
          <Progress value={power.producer} producer>
            {power.producer}%
          </Progress>
        )}
      </dd>
    </>
  ) : null;
};

export default Power;
