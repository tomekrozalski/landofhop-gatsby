import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { FormattedList } from 'elements';
import { BeverageContext } from 'components/BeverageDetails';
import {
  Editorial,
  Label,
  Producer,
  SourceGroup,
} from 'components/BeverageDetails/elements';
import AgedItem from './AgedItem';

const Aged: React.FC = () => {
  const { aged, isAged } = useContext(BeverageContext);

  return isAged ? (
    <>
      <dt>
        <FormattedMessage id="beverage.details.aged.name" />
      </dt>
      <dd>
        <SourceGroup>
          {isAged && isAged.label && (
            <Label>
              {aged && aged.label ? (
                <FormattedList type="conjunction" style="long">
                  {aged.label.map((props, i) => (
                    <AgedItem {...props} key={i} />
                  ))}
                </FormattedList>
              ) : (
                <FormattedMessage id="yes" />
              )}
            </Label>
          )}
          {isAged && isAged.producer && (
            <Producer>
              {aged && aged.producer ? (
                <FormattedList type="conjunction" style="long">
                  {aged.producer.map((props, i) => (
                    <AgedItem {...props} key={i} />
                  ))}
                </FormattedList>
              ) : (
                <FormattedMessage id="yes" />
              )}
            </Producer>
          )}
          {isAged && isAged.editorial && (
            <Editorial>
              {aged && aged.editorial ? (
                <FormattedList type="conjunction" style="long">
                  {aged.editorial.map((props, i) => (
                    <AgedItem {...props} key={i} />
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

export default Aged;
