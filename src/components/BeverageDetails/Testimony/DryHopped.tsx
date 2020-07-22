import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { getLangAttr } from 'utils/helpers';
import { FormattedList } from 'elements';
import { BeverageContext } from 'components/BeverageDetails/utils/contexts';
import {
  Editorial,
  Label,
  Producer,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

const DryHopped: React.FC = () => {
  const { dryHopped, isDryHopped } = useContext(BeverageContext);

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
                  {dryHopped.label.map(({ name }) => (
                    <SourceItem
                      lang={getLangAttr(name.language)}
                      key={name.value}
                    >
                      {name.value}
                    </SourceItem>
                  ))}
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
                  {dryHopped.producer.map(({ name }) => (
                    <SourceItem
                      lang={getLangAttr(name.language)}
                      key={name.value}
                    >
                      {name.value}
                    </SourceItem>
                  ))}
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
                  {dryHopped.editorial.map(({ name }) => (
                    <SourceItem
                      lang={getLangAttr(name.language)}
                      key={name.value}
                    >
                      {name.value}
                    </SourceItem>
                  ))}
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
