import React, { useContext } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

import { BeverageContext } from 'utils/contexts';
import { Institution as InstitutionType } from 'utils/types';
import { FormattedList } from 'elements';
import { getLangAttr, getValueByLanguage } from 'utils/helpers';
import {
  Editorial,
  Label,
  Producer,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

const Cooperation: React.FC = () => {
  const { locale } = useIntl();
  const { contract, cooperation } = useContext(BeverageContext);

  const translateItem = ({ name }: InstitutionType) => {
    const { language, value } = getValueByLanguage(name, locale);

    return (
      <SourceItem lang={getLangAttr(language)} key={value}>
        {value}
      </SourceItem>
    );
  };

  return cooperation ? (
    <FormattedMessage
      id="beverage.details.cooperation"
      values={{
        contract: contract ? 'contract' : null,
        cooperation: (
          <SourceGroup>
            {cooperation.label && (
              <Label>
                <FormattedList type="conjunction" mode="short">
                  {cooperation.label.map(translateItem)}
                </FormattedList>
              </Label>
            )}
            {cooperation.producer && (
              <Producer>
                <FormattedList type="conjunction" mode="short">
                  {cooperation.producer.map(translateItem)}
                </FormattedList>
              </Producer>
            )}
            {cooperation.editorial && (
              <Editorial>
                <FormattedList type="conjunction" mode="short">
                  {cooperation.editorial.map(translateItem)}
                </FormattedList>
              </Editorial>
            )}
          </SourceGroup>
        ),
      }}
    />
  ) : null;
};

export default Cooperation;
