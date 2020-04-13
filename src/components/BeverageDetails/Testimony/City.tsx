import React, { useContext } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

import { BeverageContext } from 'utils/contexts';
import { getLangAttr, getValueByLanguage } from 'utils/helpers';
import { LanguageValue } from 'utils/types';
import {
  Editorial,
  Label,
  Producer,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

const City: React.FC = () => {
  const { locale } = useIntl();
  const { place } = useContext(BeverageContext);

  const translateItem = (city: LanguageValue[]) => {
    const { language, value } = getValueByLanguage(city, locale);
    return <SourceItem lang={getLangAttr(language)}>{value}</SourceItem>;
  };

  return place ? (
    <>
      <dt>
        <FormattedMessage id="beverage.details.city" />
      </dt>
      <dd>
        <SourceGroup>
          {place.label && <Label>{translateItem(place.label.city)}</Label>}
          {place.producer && (
            <Producer>{translateItem(place.producer.city)}</Producer>
          )}
          {place.editorial && (
            <Editorial>{translateItem(place.editorial.city)}</Editorial>
          )}
        </SourceGroup>
      </dd>
    </>
  ) : null;
};

export default City;
