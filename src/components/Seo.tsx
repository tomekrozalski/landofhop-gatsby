import React from 'react';
import Helmet from 'react-helmet';
import { useIntl, IntlContextConsumer } from 'gatsby-plugin-intl';

import { SiteLanguage } from 'utils/enums';

type Props = {
  title: string
  values?: {}
}

const SEO: React.FC<Props> = ({ title, values }) => {
  const intl = useIntl();

  return (
    <IntlContextConsumer>
      {({ language: lang }: { language: SiteLanguage }) => (
        <Helmet
          htmlAttributes={{ lang }}
          title={intl.formatMessage({ id: `titles.${title}` }, values)}
        />
      )}
    </IntlContextConsumer>
  );
};

export default SEO;
