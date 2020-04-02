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

const Contact: React.FC = () => {
  const { contract } = useContext(BeverageContext);

  return contract ? (
    <FormattedMessage
      id="beverage.details.contract"
      values={{
        brands: (
          <SourceGroup>
            {contract.label && (
              <Label>
                <SourceItem lang={getLangAttr(contract.label.name.language)}>
                  {contract.label.name.value}
                </SourceItem>
              </Label>
            )}
            {contract.producer && (
              <Producer>
                <SourceItem lang={getLangAttr(contract.producer.name.language)}>
                  {contract.producer.name.value}
                </SourceItem>
              </Producer>
            )}
            {contract.editorial && (
              <Editorial>
                <SourceItem
                  lang={getLangAttr(contract.editorial.name.language)}
                >
                  {contract.editorial.name.value}
                </SourceItem>
              </Editorial>
            )}
          </SourceGroup>
        ),
      }}
    />
  ) : null;
};

export default Contact;
