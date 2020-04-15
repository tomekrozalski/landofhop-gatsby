import React, { useContext, useEffect, useState } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { serverCall } from 'utils/helpers';
import { AuthenticationContext } from 'utils/contexts';
import { Layout, SEO } from 'components';
import { Spinner } from 'elements';
import { Header, Wrapper } from 'elements/textPage';
import { withAdmin } from '../utils';
import { Beverage as BeverageTypes } from './utils/types';
import { BeverageContext } from './utils/contexts';
import { FormType } from './utils/enums';
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
  const { authenticationStatus } = useContext(AuthenticationContext);
  const [fetchedBeverage, setFetchedBeverage] = useState<BeverageTypes | null>(
    null,
  );

  useEffect(() => {
    const badge = location.state?.badge;
    const brand = location.state?.brand;
    const shortId = location.state?.shortId;

    if (badge && brand && shortId) {
      serverCall({
        path: `beverage/${shortId}/${brand}/${badge}`,
      }).then(values => {
        setFetchedBeverage({
          ...values,
          formType: FormType.update,
        });
      });
    }
  }, [authenticationStatus]);

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
