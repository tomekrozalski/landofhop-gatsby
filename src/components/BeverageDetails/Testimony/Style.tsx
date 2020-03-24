import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { FormattedList } from 'elements';
import { getLangAttr } from 'utils/helpers';
import { BeverageContext } from 'components/BeverageDetails';
import {
  Editorial,
  Label,
  Producer,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

const Style: React.FC = () => {
  const { style } = useContext(BeverageContext);

  return style ? (
    <>
      <dt>
        <FormattedMessage id="beverage.details.style" />
      </dt>
      <dd>
        <SourceGroup>
          {style.label && (
            <Label>
              <FormattedList type="conjunction" style="narrow">
                {style.label.map(({ language, value }) => (
                  <SourceItem lang={getLangAttr(language)} key={value}>
                    {value}
                  </SourceItem>
                ))}
              </FormattedList>
            </Label>
          )}
          {style.producer && (
            <Producer>
              <FormattedList type="conjunction" style="narrow">
                {style.producer.map(({ language, value }) => (
                  <SourceItem lang={getLangAttr(language)} key={value}>
                    {value}
                  </SourceItem>
                ))}
              </FormattedList>
            </Producer>
          )}
          {style.editorial && (
            <Editorial>
              <FormattedList type="conjunction" style="narrow">
                {style.editorial.map(({ language, value }) => (
                  <SourceItem lang={getLangAttr(language)} key={value}>
                    {value}
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

export default Style;
