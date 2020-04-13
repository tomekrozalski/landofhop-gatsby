import React from 'react';

import {
  Beverage as BeverageTypes,
  BeverageBase as BeverageBaseTypes,
} from 'utils/types';
import { Layout } from 'components';
import { useBeverageDetails } from 'utils/hooks';
import { BeverageContext } from 'utils/contexts';
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

const BeverageDetails: React.FC<Props> = ({
  data: { beverage },
  pageContext,
}) => {
  const fetchedBeverage = useBeverageDetails({
    badge: beverage.badge,
    brand: beverage.brand.badge,
    needsAuth: true,
    shortId: beverage.shortId,
  });

  return (
    <Layout>
      <BeverageContext.Provider value={fetchedBeverage || beverage}>
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
};

export default BeverageDetails;
