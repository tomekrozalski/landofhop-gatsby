import React, { useContext, useEffect } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { serverCall } from 'utils/helpers';
import { Spinner } from 'elements';
import { Header, Wrapper } from 'elements/textPage';
import { TranslatedBeverage as TranslatedBeverageTypes } from 'components/BeverageDetails/utils/types';
import { withAdmin } from '../utils';
import { ProgressBar } from './elements';
import { BeverageContext } from '.';

type Props = {
  location: {
    state: {
      badge?: string;
      brand?: string;
      shortId?: string;
    } | null;
  };
  setFetchedBeverage: ({}: TranslatedBeverageTypes) => void;
};

const Content: React.FC<Props> = ({ location, setFetchedBeverage }) => {
  const data = useContext(BeverageContext);

  useEffect(() => {
    const badge = location.state?.badge;
    const brand = location.state?.brand;
    const shortId = location.state?.shortId;

    if (badge && brand && shortId) {
      serverCall({
        path: `beverage/pl/${shortId}/${brand}/${badge}`,
      }).then(setFetchedBeverage);
    }
  }, []);

  return data ? (
    <Wrapper>
      <Header>
        <FormattedMessage id="dashboard.updateBeverage.title" />
      </Header>
      <ProgressBar />
      <div>Content</div>
    </Wrapper>
  ) : (
    <Spinner />
  );
};

export default withAdmin(Content);
