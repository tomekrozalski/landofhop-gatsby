import React, { useContext, useEffect, useState } from 'react';

import { serverCall } from 'utils/helpers';
import { AuthenticationContext } from 'utils/contexts';
import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import { AuthenticationStatus as AuthenticationStatusEnum } from 'utils/enums';
import { Layout } from 'components';
import { BeverageContext } from './utils/contexts';
import {
  Beverage as BeverageTypes,
  TranslatedBeverage as TranslatedBeverageTypes,
} from './utils/types';
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

const BeverageDetails: React.FC<Props> = ({ data, pageContext }) => {
  const { authenticationStatus } = useContext(AuthenticationContext);
  const [
    fetchedBeverage,
    setFetchedBeverage,
  ] = useState<TranslatedBeverageTypes | null>(null);

  useEffect(() => {
    if (authenticationStatus === AuthenticationStatusEnum.success) {
      serverCall({
        path: `beverage/pl/${data.beverage.shortId}/${data.beverage.brand.badge}/${data.beverage.badge}`,
      }).then(setFetchedBeverage);
    }
  }, [authenticationStatus]);

  return (
    <Layout>
      <BeverageContext.Provider
        value={fetchedBeverage || translateBeverage(data.beverage)}
      >
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
