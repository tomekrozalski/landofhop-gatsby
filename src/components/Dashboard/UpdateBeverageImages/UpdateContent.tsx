import React, { useContext, useEffect } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { AuthenticationContext } from 'utils/contexts';
import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import { serverCall } from 'utils/helpers';
import { Header, Wrapper } from 'elements/textPage';
import { BeverageContext } from './UpdateBeverageImages';
import { withAdmin } from '../utils';
import { Cap, CoverPhoto, Gallery } from '.';

type Props = {
  next: BeverageBaseTypes;
  previous: BeverageBaseTypes;
  setFetchedBeverage: ({}) => void;
};

const UpdateContent: React.FC<Props> = ({
  next,
  previous,
  setFetchedBeverage,
}) => {
  const { token } = useContext(AuthenticationContext);
  const { badge, brand, shortId } = useContext(BeverageContext);

  const updateValues = () => {
    serverCall({
      path: `beverage/update-beverage-images/pl/${shortId}/${brand.badge}/${badge}`,
      token,
    }).then(setFetchedBeverage);
  };

  useEffect(updateValues, []);

  return (
    <Wrapper>
      <Header>
        <FormattedMessage id="dashboard.updateBeverageImages.title" />
      </Header>
      <CoverPhoto next={next} previous={previous} updateValues={updateValues} />
      <Gallery updateValues={updateValues} />
      <Cap />
    </Wrapper>
  );
};

export default withAdmin(UpdateContent);
