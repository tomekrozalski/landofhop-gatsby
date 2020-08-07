import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { BeverageContext } from 'components/BeverageDetails/utils/contexts';
import {
  Editorial,
  Label,
  Producer,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

const Alcohol: React.FC = () => {
  const { alcohol } = useContext(BeverageContext);

  return alcohol ? (
    <>
      <dt>
        <FormattedMessage id="beverage.details.alcohol" />
      </dt>
      <dd>
        <SourceGroup>
          {alcohol.label && (
            <Label>
              <SourceItem>
                <FormattedMessage
                  id="beverage.details.alcoholValue"
                  values={alcohol.label}
                />
                {alcohol.label.scope && (
                  <FormattedMessage
                    id={`global.alcoholScopeValues.${alcohol.label.scope}`}
                  />
                )}
              </SourceItem>
            </Label>
          )}
          {alcohol.producer && (
            <Producer>
              <SourceItem>
                <FormattedMessage
                  id="beverage.details.alcoholValue"
                  values={alcohol.producer}
                />
                {alcohol.producer.scope && (
                  <FormattedMessage
                    id={`global.alcoholScopeValues.${alcohol.producer.scope}`}
                  />
                )}
              </SourceItem>
            </Producer>
          )}
          {alcohol.editorial && (
            <Editorial noSeparator>
              <SourceItem>
                <FormattedMessage
                  id={`global.alcoholScopeValues.${alcohol.editorial.scope}`}
                />
              </SourceItem>
            </Editorial>
          )}
        </SourceGroup>
      </dd>
    </>
  ) : null;
};

export default Alcohol;
