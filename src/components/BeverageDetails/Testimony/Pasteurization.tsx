import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import isBoolean from 'lodash/isBoolean';

import { BeverageContext } from 'utils/contexts';
import {
  Editorial,
  Label,
  Producer,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

const Pasteurization: React.FC = () => {
  const { pasteurization } = useContext(BeverageContext);

  return pasteurization ? (
    <>
      <dt>
        <FormattedMessage id="beverage.details.pasteurization" />
      </dt>
      <dd>
        <SourceGroup>
          {isBoolean(pasteurization.label) && (
            <Label>
              <SourceItem>
                <FormattedMessage id={pasteurization.label ? 'yes' : 'no'} />
              </SourceItem>
            </Label>
          )}
          {isBoolean(pasteurization.producer) && (
            <Producer>
              <SourceItem>
                <FormattedMessage id={pasteurization.producer ? 'yes' : 'no'} />
              </SourceItem>
            </Producer>
          )}
          {isBoolean(pasteurization.editorial) && (
            <Editorial>
              <SourceItem>
                <FormattedMessage
                  id={pasteurization.editorial ? 'yes' : 'no'}
                />
              </SourceItem>
            </Editorial>
          )}
        </SourceGroup>
      </dd>
    </>
  ) : null;
};

export default Pasteurization;
