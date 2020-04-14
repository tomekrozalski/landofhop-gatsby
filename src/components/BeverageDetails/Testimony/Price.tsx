import React, { useContext } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

import { FormattedList } from 'elements';
import { BeverageContext } from 'components/BeverageDetails/utils/contexts';
import {
  Editorial,
  Label,
  Producer,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

const Price: React.FC = () => {
  const { price } = useContext(BeverageContext);
  const { locale } = useIntl();

  return price ? (
    <>
      <dt>
        <FormattedMessage id="beverage.details.price" />
      </dt>
      <dd>
        <SourceGroup>
          {price.label && (
            <Label>
              <FormattedList type="conjunction" mode="narrow">
                {price.label.map(({ currency, date, value }) => (
                  <SourceItem key={date.toString()}>
                    {new Intl.NumberFormat(locale, {
                      style: 'currency',
                      currency,
                    }).format(value)}
                  </SourceItem>
                ))}
              </FormattedList>
            </Label>
          )}
          {price.producer && (
            <Producer>
              <FormattedList type="conjunction" mode="narrow">
                {price.producer.map(({ currency, date, value }) => (
                  <SourceItem key={date.toString()}>
                    {new Intl.NumberFormat(locale, {
                      style: 'currency',
                      currency,
                    }).format(value)}
                  </SourceItem>
                ))}
              </FormattedList>
            </Producer>
          )}
          {price.editorial && (
            <Editorial>
              <FormattedList type="conjunction" mode="narrow">
                {price.editorial.map(({ currency, date, value }) => (
                  <SourceItem key={date.toString()}>
                    {new Intl.NumberFormat(locale, {
                      style: 'currency',
                      currency,
                    }).format(value)}
                  </SourceItem>
                ))}
              </FormattedList>
            </Editorial>
          )}
        </SourceGroup>
      </dd>
    </>
  ) : null;
};

export default Price;
