import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import { Header, Wrapper } from 'elements/textPage';
import { AddTimeline, AlcoholChart, Fermentation, TopBrands } from '.';
import './chart.css';

const Stats: React.FC = () => (
  <Layout>
    <SEO title="stats" />
    <Wrapper>
      <Header>
        <FormattedMessage id="stats.name" />
      </Header>
      <AlcoholChart />
      <AddTimeline />
      <Fermentation />
      <TopBrands />
    </Wrapper>
  </Layout>
);

export default Stats;
