import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { BeverageContext } from 'utils/contexts';
import {
  Label,
  Producer,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

const ExpirationDate: React.FC = () => {
  const { expirationDate } = useContext(BeverageContext);

  return expirationDate ? (
    <>
      <dt>
        <FormattedMessage id="beverage.details.expirationDate" />
      </dt>
      <dd>
        <SourceGroup>
          {expirationDate.label && (
            <Label>
              <SourceItem>
                <FormattedMessage
                  id={`beverage.details.time.${expirationDate.label.unit}`}
                  values={{ value: expirationDate.label.value }}
                />
              </SourceItem>
            </Label>
          )}
          {expirationDate.producer && (
            <Producer>
              <SourceItem>
                <FormattedMessage
                  id={`beverage.details.time.${expirationDate.producer.unit}`}
                  values={{ value: expirationDate.producer.value }}
                />
              </SourceItem>
            </Producer>
          )}
        </SourceGroup>
      </dd>
    </>
  ) : null;
};

export default ExpirationDate;
