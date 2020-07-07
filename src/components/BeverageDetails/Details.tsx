import React, { useEffect, useState } from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { Link, navigate } from 'gatsby';

import { serverCall } from 'utils/helpers';
import { Status as StatusEnum } from 'utils/enums';
import { Spinner } from 'elements';
import { Layout } from 'components';
import { BeverageContext } from './utils/contexts';
import { TranslatedBeverage as TranslatedBeverageTypes } from './utils/types';
import { initialBeverageData } from './utils/helpers';
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
  location: {
    state?: {
      badge?: string;
      brand?: string;
      shortId?: string;
    };
  };
};

const Details: React.FC<Props> = ({ location }) => {
  const { locale } = useIntl();

  const [fetchedBeverage, setFetchedBeverage] = useState<
    TranslatedBeverageTypes
  >(initialBeverageData);
  const [status, setStatus] = useState(StatusEnum.idle);

  useEffect(() => {
    const badge = location?.state?.badge;
    const brand = location?.state?.brand;
    const shortId = location?.state?.shortId;

    if (badge && brand && shortId) {
      setStatus(StatusEnum.pending);

      serverCall({
        path: `beverage/${locale}/${shortId}/${brand}/${badge}`,
      })
        .then((values: TranslatedBeverageTypes) => {
          setFetchedBeverage(values);
          setStatus(StatusEnum.fulfilled);
        })
        .catch(() => {
          setStatus(StatusEnum.rejected);
        });
    } else {
      navigate('/404');
    }
  }, []);

  return (
    <Layout>
      {status === StatusEnum.fulfilled && (
        <BeverageContext.Provider value={fetchedBeverage}>
          <GridWrapper>
            <Gallery />
            <Header />
            <Tale />
            <Testimony />
            <Impressions />
            <FootNotes />
            <AdminBar adminMode />
            <Aside adminMode />
            <BeverageDetailsSeo />
          </GridWrapper>
        </BeverageContext.Provider>
      )}
      {status === StatusEnum.rejected && <Link to="/500" />}
      {status === StatusEnum.pending && <Spinner />}
    </Layout>
  );
};

export default Details;
