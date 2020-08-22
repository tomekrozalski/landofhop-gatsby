import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import { Header, Wrapper } from 'elements/textPage';
import { AddTimeline, AlcoholChart, AlcoholChartOld } from '.';

const Stats: React.FC = () => (
  <Layout>
    <SEO title="stats" />
    <Wrapper>
      <Header>
        <FormattedMessage id="stats.name" />
      </Header>
      <AlcoholChart />
      <AlcoholChartOld padding={[40, 40, 60, 60]} size={[1160, 600]} />
      <AddTimeline padding={[40, 40, 60, 60]} size={[1160, 600]} />
    </Wrapper>
  </Layout>
);

export default Stats;
