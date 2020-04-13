import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { getLangAttr } from 'utils/helpers';
import { LanguageValue } from 'utils/types';
import {
  Label,
  Producer,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

type ExtendedLanguageValue = LanguageValue & { complete?: boolean };

const Similar = ({
  label,
  producer,
}: {
  label: ExtendedLanguageValue;
  producer: ExtendedLanguageValue | null;
}) => (
  <>
    <dt>
      <FormattedMessage
        id={`beverage.details.${label.complete ? 'ingredients' : 'contains'}`}
      />
    </dt>
    <dd>
      <SourceGroup>
        <Label>
          <SourceItem lang={getLangAttr(label.language)}>
            {label.value}
          </SourceItem>
        </Label>
        {producer && label.complete === producer.complete && (
          <Producer>
            <SourceItem lang={getLangAttr(producer.language)}>
              {producer.value}
            </SourceItem>
          </Producer>
        )}
      </SourceGroup>
    </dd>
  </>
);

export default Similar;
