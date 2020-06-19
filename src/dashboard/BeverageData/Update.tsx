import React, { useContext, useEffect } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { Layout, SEO } from 'components';
import { Spinner } from 'elements';
import { Header, Wrapper } from 'elements/textPage';
import { BeverageContext, LanguageContext } from 'dashboard/utils/contexts';
import { Status as StatusEnum } from 'dashboard/utils/enums';
import { Modal } from 'dashboard/elements';
import { Navigation } from './elements';
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
  const {
    getBeverageDetails,
    resetBeverageDetails,
    status: beverageStatus,
  } = useContext(BeverageContext);
  const { status: languageStatus } = useContext(LanguageContext);

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

    return resetBeverageDetails;
  }, []);

  return (
    <Layout>
      <SEO title="updateBeverage" />
      <Wrapper>
        <Header>
          <FormattedMessage id="dashboard.updateBeverage.title" />
        </Header>
        <Navigation />
        {beverageStatus === StatusEnum.fulfilled &&
        languageStatus === StatusEnum.fulfilled ? (
          <Label />
        ) : (
          <Spinner />
        )}
        <Modal />
      </Wrapper>
    </Layout>
  );
};

export default Update;
