import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { getLangAttr } from 'utils/helpers';
import { BeverageContext } from 'components/BeverageDetails/utils/contexts';
import {
  Editorial,
  Label,
  Producer,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

const Country: React.FC = () => {
  const { place } = useContext(BeverageContext);

  return place ? (
    <>
      <dt>
        <FormattedMessage id="beverage.details.country" />
      </dt>
      <dd>
        <SourceGroup>
          {place.label && (
            <Label>
              <SourceItem lang={getLangAttr(place.label.country.language)}>
                {place.label.country.value}
              </SourceItem>
            </Label>
          )}
          {place.producer && (
            <Producer>
              <SourceItem lang={getLangAttr(place.producer.country.language)}>
                {place.producer.country.value}
              </SourceItem>
            </Producer>
          )}
          {place.editorial && (
            <Editorial>
              <SourceItem lang={getLangAttr(place.editorial.country.language)}>
                {place.editorial.country.value}
              </SourceItem>
            </Editorial>
          )}
        </SourceGroup>
      </dd>
    </>
  ) : null;
};

export default Country;
