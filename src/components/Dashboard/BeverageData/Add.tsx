import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { Layout, SEO } from 'components';
import { Header, Wrapper } from 'elements/textPage';
import { BeverageContext } from 'utils/contexts';
import { initialBeverageData } from 'utils/helpers';
import { withAdmin } from '../utils';
import { ProgressBar } from './elements';
import { Label } from '.';

const Add: React.FC = () => (
  <Layout>
    <SEO title="addBeverage" />
    <BeverageContext.Provider value={initialBeverageData}>
      <Wrapper>
        <Header>
          <FormattedMessage id="dashboard.addBeverage.title" />
        </Header>
        <ProgressBar />
        <Label />
      </Wrapper>
    </BeverageContext.Provider>
  </Layout>
);

export default withAdmin(Add);
