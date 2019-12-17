import React from 'react';
import Helmet from 'react-helmet';
import { useIntl, IntlContextConsumer } from 'gatsby-plugin-intl';

import { SiteLanguage } from 'utils/enums';

type Props = {
  title: string
}

const SEO: React.FC<Props> = ({ title }) => {
  const intl = useIntl();

  return (
    <IntlContextConsumer>
      {({ language: lang }: { language: SiteLanguage }) => (
        <Helmet
          htmlAttributes={{ lang }}
          title={intl.formatMessage({ id: `titles.${title}` })}
        />
      )}
    </IntlContextConsumer>
  );
};

export default SEO;
