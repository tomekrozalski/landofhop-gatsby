import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import { BeverageContext } from 'components/BeverageDetails';

import {
  Label,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

const Container: React.FC = () => {
  const { container } = useContext(BeverageContext);
  const { color, material, type, unit, value } = container;

  return (
    <>
      <dt>
        <FormattedMessage id="beverage.details.container.name" />
      </dt>
      <dd>
        <SourceGroup>
          <Label>
            <SourceItem>
              <FormattedMessage
                id={`beverage.details.container.type.${type}`}
              />{' '}
              <FormattedMessage
                id={`beverage.details.container.material.${material}`}
              />
              {', '}
              <FormattedMessage
                id={`beverage.details.container.color.${color}`}
              />
              {', '}
              <FormattedMessage
                id="beverage.details.container.value"
                values={{ value, unit }}
              />
            </SourceItem>
          </Label>
        </SourceGroup>
      </dd>
    </>
  );
};

export default Container;
