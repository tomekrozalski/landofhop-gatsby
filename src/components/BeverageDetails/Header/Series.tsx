import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { FormattedList } from 'elements';
import { getLangAttr } from 'utils/helpers';
import { BeverageContext } from 'components/BeverageDetails/utils/contexts';
import {
  Label,
  Producer,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

const Series: React.FC = () => {
  const { series } = useContext(BeverageContext);

  return series ? (
    <FormattedMessage
      id="beverage.details.series"
      values={{
        series: (
          <SourceGroup>
            {series.label && (
              <Label>
                <FormattedList type="conjunction" mode="short">
                  {series.label.map(({ language, value }) => (
                    <SourceItem lang={getLangAttr(language)} key={value}>
                      {value}
                    </SourceItem>
                  ))}
                </FormattedList>
              </Label>
            )}
            {series.producer && (
              <Producer>
                <FormattedList type="conjunction" mode="short">
                  {series.producer.map(({ language, value }) => (
                    <SourceItem lang={getLangAttr(language)} key={value}>
                      {value}
                    </SourceItem>
                  ))}
                </FormattedList>
              </Producer>
            )}
          </SourceGroup>
        ),
      }}
    />
  ) : null;
};

export default Series;
