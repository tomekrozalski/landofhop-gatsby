import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { FormattedList } from 'elements';
import { getLangAttr } from 'utils/helpers';
import { BeverageContext } from 'components/BeverageDetails/utils/contexts';
import {
  Editorial,
  Label,
  Producer,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

const Cooperation: React.FC = () => {
  const { contract, cooperation } = useContext(BeverageContext);

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
                  {cooperation.label.map(({ name }) => (
                    <SourceItem
                      lang={getLangAttr(name.language)}
                      key={name.value}
                    >
                      {name.value}
                    </SourceItem>
                  ))}
                </FormattedList>
              </Label>
            )}
            {cooperation.producer && (
              <Producer>
                <FormattedList type="conjunction" mode="short">
                  {cooperation.producer.map(({ name }) => (
                    <SourceItem
                      lang={getLangAttr(name.language)}
                      key={name.value}
                    >
                      {name.value}
                    </SourceItem>
                  ))}
                </FormattedList>
              </Producer>
            )}
            {cooperation.editorial && (
              <Editorial>
                <FormattedList type="conjunction" mode="short">
                  {cooperation.editorial.map(({ name }) => (
                    <SourceItem
                      lang={getLangAttr(name.language)}
                      key={name.value}
                    >
                      {name.value}
                    </SourceItem>
                  ))}
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
