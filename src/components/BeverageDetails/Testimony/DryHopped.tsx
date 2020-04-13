import React, { useContext } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

import { BeverageContext } from 'utils/contexts';
import { getLangAttr, getValueByLanguage } from 'utils/helpers';
import { LanguageValue } from 'utils/types';
import { FormattedList } from 'elements';
import {
  Editorial,
  Label,
  Producer,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

const DryHopped: React.FC = () => {
  const { locale } = useIntl();
  const { dryHopped, isDryHopped } = useContext(BeverageContext);

  const translateItem = (hop: LanguageValue[]) => {
    const { language, value } = getValueByLanguage(hop, locale);

    return (
      <SourceItem lang={getLangAttr(language)} key={value}>
        {value}
      </SourceItem>
    );
  };

  return isDryHopped ? (
    <>
      <dt>
        <FormattedMessage id="beverage.details.dryHopped" />
      </dt>
      <dd>
        <SourceGroup>
          {isDryHopped && isDryHopped.label && (
            <Label>
              {dryHopped && dryHopped.label ? (
                <FormattedList type="conjunction" mode="short">
                  {dryHopped.label.map(translateItem)}
                </FormattedList>
              ) : (
                <FormattedMessage id="yes" />
              )}
            </Label>
          )}
          {isDryHopped && isDryHopped.producer && (
            <Producer>
              {dryHopped && dryHopped.producer ? (
                <FormattedList type="conjunction" mode="short">
                  {dryHopped.producer.map(translateItem)}
                </FormattedList>
              ) : (
                <FormattedMessage id="yes" />
              )}
            </Producer>
          )}
          {isDryHopped && isDryHopped.editorial && (
            <Editorial>
              {dryHopped && dryHopped.editorial ? (
                <FormattedList type="conjunction" mode="short">
                  {dryHopped.editorial.map(translateItem)}
                </FormattedList>
              ) : (
                <FormattedMessage id="yes" />
              )}
            </Editorial>
          )}
        </SourceGroup>
      </dd>
    </>
  ) : null;
};

export default DryHopped;
