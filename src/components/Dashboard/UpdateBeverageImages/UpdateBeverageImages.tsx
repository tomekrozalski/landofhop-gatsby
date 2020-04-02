import React, { useContext, useEffect, useState } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { Layout, SEO } from 'components';
import { Header, Wrapper } from 'elements/textPage';
import { serverCall } from 'utils/helpers';
import { AuthenticationContext } from 'utils/contexts';
import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import {
  Beverage as BeverageTypes,
  TranslatedBeverage as TranslatedBeverageTypes,
} from './utils/types';
import { initialBeverageData, translateBeverage } from './utils/helpers';
import { Cap, CoverPhoto, Gallery } from '.';

// @Info: I could use Partial generic, but it would complicate displaying some components
export const BeverageContext = React.createContext<TranslatedBeverageTypes>(
  initialBeverageData,
);

type Props = {
  data: {
    beverage: BeverageTypes;
  };
  pageContext: {
    badge: string;
    brandBadge: string;
    next: BeverageBaseTypes;
    previous: BeverageBaseTypes;
    shortId: string;
  };
};

const UpdateBeverageImages: React.FC<Props> = ({ data, pageContext }) => {
  const { token } = useContext(AuthenticationContext);

  const [
    fetchedBeverage,
    setFetchedBeverage,
  ] = useState<TranslatedBeverageTypes | null>(null);

  const updateValues = () => {
    const { badge, brand, shortId } = data.beverage;

    serverCall({
      path: `beverage/update-beverage-images/pl/${shortId}/${brand.badge}/${badge}`,
      token,
    }).then(setFetchedBeverage);
  };

  useEffect(updateValues, []);

  return (
    <Layout>
      <SEO title="updateBeverageImages" />
      <BeverageContext.Provider
        value={fetchedBeverage || translateBeverage(data.beverage)}
      >
        <Wrapper>
          <Header>
            <FormattedMessage id="dashboard.updateBeverageImages.title" />
          </Header>
          <CoverPhoto
            next={pageContext.next}
            previous={pageContext.previous}
            updateValues={updateValues}
          />
          <Gallery updateValues={updateValues} />
          <Cap updateValues={updateValues} />
        </Wrapper>
      </BeverageContext.Provider>
    </Layout>
  );
};

export default UpdateBeverageImages;
