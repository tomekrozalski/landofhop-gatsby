import React from 'react';

import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import { Layout } from 'components';
import { BeverageContext } from './utils/contexts';
import { Beverage as BeverageTypes } from './utils/types';
import { translateBeverage } from './utils/helpers';
import { BeverageDetailsSeo, GridWrapper } from './elements';
import {
  AdminBar,
  Aside,
  FootNotes,
  Gallery,
  Header,
  Impressions,
  Tale,
  Testimony,
} from '.';

type Props = {
  data: {
    beverage: BeverageTypes;
  };
  pageContext: {
    next: BeverageBaseTypes;
    previous: BeverageBaseTypes;
  };
};

const BeverageDetails: React.FC<Props> = ({ data, pageContext }) => (
  <Layout>
    <BeverageContext.Provider value={translateBeverage(data.beverage)}>
      <GridWrapper>
        <Gallery />
        <Header />
        <Tale />
        <Testimony />
        <Impressions />
        <FootNotes />
        <AdminBar />
        <Aside next={pageContext.next} previous={pageContext.previous} />
        <BeverageDetailsSeo />
      </GridWrapper>
    </BeverageContext.Provider>
  </Layout>
);

export default BeverageDetails;
