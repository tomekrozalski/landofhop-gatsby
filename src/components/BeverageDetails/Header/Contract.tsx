import React, { useContext } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

import { BeverageContext } from 'utils/contexts';
import { Institution as InstitutionType } from 'utils/types';
import { getLangAttr, getValueByLanguage } from 'utils/helpers';

import {
  Editorial,
  Label,
  Producer,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

const Contact: React.FC = () => {
  const { locale } = useIntl();
  const { contract } = useContext(BeverageContext);

  const translateItem = (brand: InstitutionType) => {
    const { language, value } = getValueByLanguage(brand.name, locale);
    return <SourceItem lang={getLangAttr(language)}>{value}</SourceItem>;
  };

  return contract ? (
    <FormattedMessage
      id="beverage.details.contract"
      values={{
        brands: (
          <SourceGroup>
            {contract.label && <Label>{translateItem(contract.label)}</Label>}
            {contract.producer && (
              <Producer>{translateItem(contract.producer)}</Producer>
            )}
            {contract.editorial && (
              <Editorial>{translateItem(contract.editorial)}</Editorial>
            )}
          </SourceGroup>
        ),
      }}
    />
  ) : null;
};

export default Contact;
