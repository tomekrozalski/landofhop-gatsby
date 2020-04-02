import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { Layout, SEO } from 'components';
import { ErrorHeader, ErrorWrapper } from 'elements';

const NotLoggedIn = () => (
  <Layout>
    <SEO title="accessDenied" />
    <ErrorWrapper>
      <ErrorHeader>
        <FormattedMessage id="dashboard.notLoggedInError" />
      </ErrorHeader>
    </ErrorWrapper>
  </Layout>
);

export default NotLoggedIn;
