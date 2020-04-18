import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { Layout, SEO } from 'components';
import { Header, Wrapper } from 'elements/textPage';
import { ProgressBar } from './elements';

const Add: React.FC = () => (
  <Layout>
    <SEO title="addBeverage" />
    <Wrapper>
      <Header>
        <FormattedMessage id="dashboard.addBeverage.title" />
      </Header>
      <ProgressBar />
      {/* <Label /> */}
    </Wrapper>
  </Layout>
);

export default Add;
