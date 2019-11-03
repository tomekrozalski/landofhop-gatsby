import React from 'react';
import {
  Link,
  FormattedMessage,
  IntlContextConsumer,
} from 'gatsby-plugin-intl';

import Layout from 'components/layout';
import SEO from 'components/seo';

const IndexPage = () => {
  console.log('test');

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>
        <FormattedMessage id="test" />
      </p>
      <IntlContextConsumer>
        {({ language }) => <div>language: {language}</div>}
      </IntlContextConsumer>

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;
