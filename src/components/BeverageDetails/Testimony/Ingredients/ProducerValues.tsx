import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { getLangAttr } from 'utils/helpers';
import { LanguageValue } from 'utils/types';
import {
  Producer,
  SourceGroup,
  SourceItem,
} from 'components/BeverageDetails/elements';

type ExtendedLanguageValue = LanguageValue & { complete?: boolean };

const ProducerValues = ({
  complete,
  language,
  value,
}: ExtendedLanguageValue) => (
  <>
    <dt>
      <FormattedMessage
        id={`beverage.details.${complete ? 'ingredients' : 'contains'}`}
      />
    </dt>
    <dd>
      <SourceGroup>
        <Producer>
          <SourceItem lang={getLangAttr(language)}>{value}</SourceItem>
        </Producer>
      </SourceGroup>
    </dd>
  </>
);

export default ProducerValues;
