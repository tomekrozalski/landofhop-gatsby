import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import isBoolean from 'lodash/isBoolean';

import { BeverageContext } from 'components/BeverageDetails/utils/contexts';
import {
  Editorial,
  Label,
  Producer,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

const Filtration: React.FC = () => {
  const { filtration } = useContext(BeverageContext);

  return filtration ? (
    <>
      <dt>
        <FormattedMessage id="beverage.details.filtration" />
      </dt>
      <dd>
        <SourceGroup>
          {isBoolean(filtration.label) && (
            <Label>
              <SourceItem>
                <FormattedMessage id={filtration.label ? 'yes' : 'no'} />
              </SourceItem>
            </Label>
          )}
          {isBoolean(filtration.producer) && (
            <Producer>
              <SourceItem>
                <FormattedMessage id={filtration.producer ? 'yes' : 'no'} />
              </SourceItem>
            </Producer>
          )}
          {isBoolean(filtration.editorial) && (
            <Editorial>
              <SourceItem>
                <FormattedMessage id={filtration.editorial ? 'yes' : 'no'} />
              </SourceItem>
            </Editorial>
          )}
        </SourceGroup>
      </dd>
    </>
  ) : null;
};

export default Filtration;
