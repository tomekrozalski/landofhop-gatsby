import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { BeverageContext } from 'components/BeverageDetails/utils/contexts';
import {
  Label,
  Producer,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

const HopRate: React.FC = () => {
  const { hopRate } = useContext(BeverageContext);

  return hopRate ? (
    <>
      <dt>
        <FormattedMessage id="beverage.details.hopRate.name" />
      </dt>
      <dd>
        <SourceGroup>
          {hopRate.label && (
            <Label>
              <SourceItem>
                <FormattedMessage
                  id="beverage.details.hopRate.value"
                  values={hopRate.label}
                />
              </SourceItem>
            </Label>
          )}
          {hopRate.producer && (
            <Producer>
              <SourceItem>
                <FormattedMessage
                  id="beverage.details.hopRate.value"
                  values={hopRate.producer}
                />
              </SourceItem>
            </Producer>
          )}
        </SourceGroup>
      </dd>
    </>
  ) : null;
};

export default HopRate;
