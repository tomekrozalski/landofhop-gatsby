import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { FormattedList } from 'elements';
import { Aged as AgedTypes } from 'components/BeverageDetails/utils/types';
import { SourceItem } from 'components/BeverageDetails/elements';

const AgedItem: React.FC<AgedTypes> = ({
  previousContent,
  type,
  time,
  wood,
}) => (
  <SourceItem>
    {time && (
      <FormattedMessage
        id={`beverage.details.time.${time.unit}`}
        values={{ value: time.value }}
      />
    )}
    {(wood || previousContent) && ' '}
    {wood && <FormattedMessage id={`beverage.details.aged.${type}.${wood}`} />}
    {!wood && type && (
      <FormattedMessage id={`beverage.details.aged.${type}.unknown`} />
    )}
    {previousContent && ' '}
    {previousContent && (
      <>
        <FormattedMessage id="beverage.details.aged.previousContent.name" />{' '}
        <FormattedList type="conjunction" mode="short">
          {previousContent.map(content => (
            <FormattedMessage
              id="beverage.details.aged.previousContent.content"
              key={content}
              values={{ content }}
            />
          ))}
        </FormattedList>
      </>
    )}
  </SourceItem>
);

export default AgedItem;
