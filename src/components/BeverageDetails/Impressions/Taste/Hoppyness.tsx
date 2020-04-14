import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import isNumber from 'lodash/isNumber';

import { BeverageContext } from 'components/BeverageDetails/utils/contexts';
import { Progress } from '.';

const Hoppyness: React.FC = () => {
  const { hoppyness } = useContext(BeverageContext);

  return hoppyness ? (
    <>
      <dt>
        <FormattedMessage id="beverage.details.hoppyness" />
      </dt>
      <dd>
        {isNumber(hoppyness.label) && (
          <Progress value={hoppyness.label}>{hoppyness.label}%</Progress>
        )}
        {isNumber(hoppyness.producer) && (
          <Progress value={hoppyness.producer} producer>
            {hoppyness.producer}%
          </Progress>
        )}
      </dd>
    </>
  ) : null;
};

export default Hoppyness;
