import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { BeverageContext } from 'components/BeverageDetails/utils/contexts';
import {
  Label,
  Producer,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

const SmokedMalt: React.FC = () => {
  const { smokedMalt } = useContext(BeverageContext);

  return smokedMalt?.label || smokedMalt?.producer ? (
    <>
      <dt>
        <FormattedMessage id="beverage.details.smokedMalt" />
      </dt>
      <dd>
        <SourceGroup>
          {smokedMalt?.label && (
            <Label>
              <SourceItem>
                <FormattedMessage id="yes" />
              </SourceItem>
            </Label>
          )}
          {smokedMalt?.producer && (
            <Producer>
              <SourceItem>
                <FormattedMessage id="yes" />
              </SourceItem>
            </Producer>
          )}
        </SourceGroup>
      </dd>
    </>
  ) : null;
};

export default SmokedMalt;
