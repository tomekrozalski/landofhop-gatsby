import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { BeverageContext } from 'utils/contexts';
import { getLangAttr } from 'utils/helpers';
import {
  Editorial,
  Label,
  Producer,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

const City: React.FC = () => {
  const { place } = useContext(BeverageContext);

  return place ? (
    <>
      <dt>
        <FormattedMessage id="beverage.details.city" />
      </dt>
      <dd>
        <SourceGroup>
          {place.label && (
            <Label>
              <SourceItem lang={getLangAttr(place.label.city.language)}>
                {place.label.city.value}
              </SourceItem>
            </Label>
          )}
          {place.producer && (
            <Producer>
              <SourceItem lang={getLangAttr(place.producer.city.language)}>
                {place.producer.city.value}
              </SourceItem>
            </Producer>
          )}
          {place.editorial && (
            <Editorial>
              <SourceItem lang={getLangAttr(place.editorial.city.language)}>
                {place.editorial.city.value}
              </SourceItem>
            </Editorial>
          )}
        </SourceGroup>
      </dd>
    </>
  ) : null;
};

export default City;
