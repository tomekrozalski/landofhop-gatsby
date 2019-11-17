import React from 'react';
import { string } from 'prop-types';
import Helmet from 'react-helmet';
import { useIntl, IntlContextConsumer } from 'gatsby-plugin-intl';

const SEO = ({ title }) => {
  const intl = useIntl();

  return (
    <IntlContextConsumer>
      {({ language: lang }) => (
        <Helmet
          htmlAttributes={{ lang }}
          title={intl.formatMessage({ id: `titles.${title}` })}
        />
      )}
    </IntlContextConsumer>
  );
};

SEO.propTypes = {
  title: string.isRequired,
};

export default SEO;
