import React, { useContext } from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { format } from 'date-fns';

import { BeverageContext } from 'utils/contexts';

import { SiteLanguage } from 'utils/enums';

const Added: React.FC = () => {
  const { locale } = useIntl();
  const { added } = useContext(BeverageContext);

  return (
    <>
      <dt>
        <FormattedMessage id="beverage.details.added" />
      </dt>
      <dd>
        {format(
          new Date(added),
          locale === SiteLanguage.pl ? 'dd.MM.yyyy' : 'dd/MM/yyyy',
        )}
      </dd>
    </>
  );
};

export default Added;
