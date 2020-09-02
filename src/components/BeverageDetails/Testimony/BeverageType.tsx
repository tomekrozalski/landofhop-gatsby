import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { BeverageContext } from 'components/BeverageDetails/utils/contexts';
import {
  Editorial,
  Label,
  Producer,
  SourceGroup,
} from 'components/BeverageDetails/elements';

const BeverageType: React.FC = () => {
  const { beverageType } = useContext(BeverageContext);

  return beverageType ? (
    <>
      <dt>
        <FormattedMessage id="beverage.details.type.name" />
      </dt>
      <dd>
        <SourceGroup>
          {beverageType.label && (
            <Label>
              <FormattedMessage
                id={`beverage.details.type.${beverageType.label}`}
              />
            </Label>
          )}
          {beverageType.producer && (
            <Producer>
              <FormattedMessage
                id={`beverage.details.type.${beverageType.producer}`}
              />
            </Producer>
          )}
          {beverageType.editorial && (
            <Editorial>
              <FormattedMessage
                id={`beverage.details.type.${beverageType.editorial}`}
              />
            </Editorial>
          )}
        </SourceGroup>
      </dd>
    </>
  ) : null;
};

export default BeverageType;
