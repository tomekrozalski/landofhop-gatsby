import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import isNumber from 'lodash/isNumber';

import { BeverageContext } from 'utils/contexts';
import { Progress } from '.';

const Fullness: React.FC = () => {
  const { fullness } = useContext(BeverageContext);

  return fullness ? (
    <>
      <dt>
        <FormattedMessage id="beverage.details.fullness" />
      </dt>
      <dd>
        {isNumber(fullness.label) && (
          <Progress value={fullness.label}>{fullness.label}%</Progress>
        )}
        {isNumber(fullness.producer) && (
          <Progress value={fullness.producer} producer>
            {fullness.producer}%
          </Progress>
        )}
      </dd>
    </>
  ) : null;
};

export default Fullness;
