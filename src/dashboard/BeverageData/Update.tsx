import React, { useContext, useEffect } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { Layout, SEO } from 'components';
import { Spinner } from 'elements';
import { Header, Wrapper } from 'elements/textPage';
import { BeverageContext } from 'dashboard/utils/contexts';
import { Status as StatusEnum } from 'dashboard/utils/enums';
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
  const { getBeverageDetails, status } = useContext(BeverageContext);

  useEffect(() => {
    const badge = location.state?.badge;
    const brand = location.state?.brand;
    const shortId = location.state?.shortId;

    if (badge && brand && shortId) {
      getBeverageDetails({
        badge,
        brand,
        shortId,
      });
    }

    return () => {
      console.log('resetBeverageDetails');
    };
  }, []);

  return (
    <Layout>
      <SEO title="updateBeverage" />
      <Wrapper>
        <Header>
          <FormattedMessage id="dashboard.updateBeverage.title" />
        </Header>
        <ProgressBar />
        {status === StatusEnum.fulfilled ? <Label /> : <Spinner />}
      </Wrapper>
    </Layout>
  );
};

export default Update;
