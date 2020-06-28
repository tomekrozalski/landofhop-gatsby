import React, { useContext, useEffect } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { Layout, SEO } from 'components';
import { Spinner } from 'elements';
import { Header, Wrapper } from 'elements/textPage';
import { NavigationContext, LanguageContext } from 'dashboard/utils/contexts';
import { Status as StatusEnum } from 'dashboard/utils/enums';
import { Modal } from 'dashboard/elements';
import { Navigation } from './elements';
import { Form } from '.';

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
    beverageDataLoadStatus,
  } = useContext(NavigationContext);
  const { status: languageStatus } = useContext(LanguageContext);

  const preventClose = (e: Event) => {
    e.preventDefault();
    e.returnValue = true;
  };

  useEffect(() => {
    if (languageStatus === StatusEnum.fulfilled) {
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
    }

    window.addEventListener('beforeunload', preventClose);

    return () => {
      resetBeverageDetails();
      window.removeEventListener('beforeunload', preventClose);
    };
  }, [languageStatus]);

  return (
    <Layout>
      <SEO title="updateBeverage" />
      <Wrapper>
        <Header>
          <FormattedMessage id="dashboard.updateBeverage.title" />
        </Header>
        <Navigation />
        {beverageDataLoadStatus === StatusEnum.fulfilled ? (
          <Form />
        ) : (
          <Spinner />
        )}
        <Modal />
      </Wrapper>
    </Layout>
  );
};

export default Update;
