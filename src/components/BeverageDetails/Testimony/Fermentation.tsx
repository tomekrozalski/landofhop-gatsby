import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { FormattedList } from 'elements';
import { BeverageContext } from 'components/BeverageDetails';
import {
  Editorial,
  Label,
  Producer,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

const Fermentation: React.FC = () => {
  const { fermentation } = useContext(BeverageContext);

  return fermentation ? (
    <>
      <dt>
        <FormattedMessage id="beverage.details.fermentation" />
      </dt>
      <dd>
        <SourceGroup>
          {fermentation.label && (
            <Label>
              <FormattedList type="conjunction" mode="short">
                {fermentation.label.map(type => (
                  <SourceItem key={type}>
                    <FormattedMessage
                      id={`beverage.fermentationType.${type}`}
                    />
                  </SourceItem>
                ))}
              </FormattedList>
            </Label>
          )}
          {fermentation.producer && (
            <Producer>
              <FormattedList type="conjunction" mode="short">
                {fermentation.producer.map(type => (
                  <SourceItem key={type}>
                    <FormattedMessage
                      id={`beverage.fermentationType.${type}`}
                    />
                  </SourceItem>
                ))}
              </FormattedList>
            </Producer>
          )}
          {fermentation.editorial && (
            <Editorial>
              <FormattedList type="conjunction" mode="short">
                {fermentation.editorial.map(type => (
                  <SourceItem key={type}>
                    <FormattedMessage
                      id={`beverage.fermentationType.${type}`}
                    />
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

export default Fermentation;
