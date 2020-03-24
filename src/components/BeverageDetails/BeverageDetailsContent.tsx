import React, { useContext, useEffect } from 'react';

import { checkIsLoggedInHOC, serverCall } from 'utils/helpers';
import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import { BeverageDetailsSeo, GridWrapper } from './elements';
import { TranslatedBeverage as TranslatedBeverageTypes } from './utils/types';
import {
  AdminBar,
  Aside,
  BeverageContext,
  FootNotes,
  Gallery,
  Header,
  Impressions,
  Tale,
  Testimony,
} from '.';

type Props = {
  loggedIn?: boolean;
  next: BeverageBaseTypes;
  previous: BeverageBaseTypes;
  setFetchedBeverage: ({}: TranslatedBeverageTypes) => void;
};

const BeverageDetailsContent: React.FC<Props> = ({
  loggedIn,
  next,
  previous,
  setFetchedBeverage,
}) => {
  const { badge, brand, shortId } = useContext(BeverageContext);

  useEffect(() => {
    if (loggedIn) {
      serverCall({
        path: `beverage/pl/${shortId}/${brand.badge}/${badge}`,
      }).then(setFetchedBeverage);
    }
  }, [loggedIn]);

  return (
    <GridWrapper>
      <Gallery />
      <Header />
      <Tale />
      <Testimony />
      <Impressions />
      <FootNotes />
      <AdminBar />
      <Aside next={next} previous={previous} />
      <BeverageDetailsSeo />
    </GridWrapper>
  );
};

export default checkIsLoggedInHOC(BeverageDetailsContent);
