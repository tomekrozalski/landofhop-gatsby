import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { BeverageContext } from 'utils/contexts';
import {
  Label,
  Producer,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

const Extract: React.FC = () => {
  const { extract } = useContext(BeverageContext);

  return extract ? (
    <>
      <dt>
        <FormattedMessage id="beverage.details.extract" />
      </dt>
      <dd>
        <SourceGroup>
          {extract.label && (
            <Label>
              <SourceItem>
                <FormattedMessage
                  id="beverage.details.extractValue"
                  values={extract.label}
                />
              </SourceItem>
            </Label>
          )}
          {extract.producer && (
            <Producer>
              <SourceItem>
                <FormattedMessage
                  id="beverage.details.extractValue"
                  values={extract.producer}
                />
              </SourceItem>
            </Producer>
          )}
        </SourceGroup>
      </dd>
    </>
  ) : null;
};

export default Extract;
