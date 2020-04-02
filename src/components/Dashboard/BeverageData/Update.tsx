import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { useBeverageDetails } from 'utils/hooks';
import { Layout, SEO } from 'components';
import { Spinner } from 'elements';
import { Header, Wrapper } from 'elements/textPage';
import { BeverageContext } from 'utils/contexts';
import { withAdmin } from '../utils';
import { ProgressBar } from './elements';
import { Label } from '.';

type Props = {
  location: {
    state: {
      badge?: string;
      brand?: string;
      shortId?: string;
    } | null;
  };
};

const Update: React.FC<Props> = ({ location }) => {
  const fetchedBeverage = useBeverageDetails({
    badge: location.state?.badge,
    brand: location.state?.brand,
    shortId: location.state?.shortId,
  });

  return (
    <Layout>
      <SEO title="updateBeverage" />
      {fetchedBeverage ? (
        <BeverageContext.Provider value={fetchedBeverage}>
          <Wrapper>
            <Header>
              <FormattedMessage id="dashboard.updateBeverage.title" />
            </Header>
            <ProgressBar />
            <Label />
          </Wrapper>
        </BeverageContext.Provider>
      ) : (
        <Spinner />
      )}
    </Layout>
  );
};

export default withAdmin(Update);
