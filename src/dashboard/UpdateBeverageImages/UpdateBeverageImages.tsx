import React, { useContext, useEffect, useState } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { Layout, SEO } from 'components';
import { Spinner } from 'elements';
import { Header, Wrapper } from 'elements/textPage';
import { serverCall } from 'utils/helpers';
import { AuthenticationContext } from 'utils/contexts';
import { Status as StatusEnum } from 'utils/enums';
import { TranslatedBeverage as TranslatedBeverageType } from './utils/types';
import { initialBeverageData } from './utils/helpers';
import { Cap, CoverPhoto, Gallery } from '.';

export const BeverageContext = React.createContext<TranslatedBeverageType>(
  initialBeverageData,
);

type Props = {
  location: {
    state: {
      adminMode?: boolean;
      badge?: string;
      brand?: string;
      shortId?: string;
    } | null;
  };
};

const UpdateBeverageImages: React.FC<Props> = ({ location }) => {
  const { token } = useContext(AuthenticationContext);

  const [beverageImagesData, setBeverageImagesData] = useState<
    TranslatedBeverageType
  >(initialBeverageData);
  const [status, setStatus] = useState<StatusEnum>(StatusEnum.idle);

  useEffect(() => {
    if (beverageImagesData) {
      setStatus(StatusEnum.fulfilled);
    }
  }, [beverageImagesData]);

  const updateValues = () => {
    const badge = location.state?.badge;
    const brand = location.state?.brand;
    const shortId = location.state?.shortId;

    if (badge && brand && shortId) {
      serverCall({
        path: `beverage/images/pl/${shortId}/${brand}/${badge}`,
        token,
      }).then(setBeverageImagesData);
    }
  };

  useEffect(updateValues, []);

  return (
    <Layout>
      <SEO title="updateBeverageImages" />
      <BeverageContext.Provider value={beverageImagesData}>
        <Wrapper>
          <Header>
            <FormattedMessage id="dashboard.updateBeverageImages.title" />
          </Header>
          {status === StatusEnum.fulfilled ? (
            <>
              <CoverPhoto
                updateValues={updateValues}
                adminMode={location.state?.adminMode ?? false}
              />
              <Gallery updateValues={updateValues} />
              <Cap updateValues={updateValues} />
            </>
          ) : (
            <Spinner />
          )}
        </Wrapper>
      </BeverageContext.Provider>
    </Layout>
  );
};

export default UpdateBeverageImages;
