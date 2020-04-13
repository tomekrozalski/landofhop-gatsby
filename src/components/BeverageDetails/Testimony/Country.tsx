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

const Country: React.FC = () => {
  const { locale } = useIntl();
  const { place } = useContext(BeverageContext);

  const translateItem = (country: LanguageValue[]) => {
    const { language, value } = getValueByLanguage(country, locale);
    return <SourceItem lang={getLangAttr(language)}>{value}</SourceItem>;
  };

  return place ? (
    <>
      <dt>
        <FormattedMessage id="beverage.details.country" />
      </dt>
      <dd>
        <SourceGroup>
          {place.label && <Label>{translateItem(place.label.country)}</Label>}
          {place.producer && (
            <Producer>{translateItem(place.producer.country)}</Producer>
          )}
          {place.editorial && (
            <Editorial>{translateItem(place.editorial.country)}</Editorial>
          )}
        </SourceGroup>
      </dd>
    </>
  ) : null;
};

export default Country;
