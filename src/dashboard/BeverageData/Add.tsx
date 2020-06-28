import React, { useContext, useEffect } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { Layout, SEO } from 'components';
import { Spinner } from 'elements';
import { Header, Wrapper } from 'elements/textPage';
import { Status as StatusEnum } from 'dashboard/utils/enums';
import { NavigationContext } from 'dashboard/utils/contexts';
import { Modal } from 'dashboard/elements';
import { Navigation } from './elements';
import { Form } from '.';

const Add: React.FC = () => {
  const { beverageDataLoadStatus } = useContext(NavigationContext);

  const preventClose = (e: Event) => {
    e.preventDefault();
    e.returnValue = true;
  };

  useEffect(() => {
    window.addEventListener('beforeunload', preventClose);

    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);

  return (
    <Layout>
      <SEO title="addBeverage" />
      <Wrapper>
        <Header>
          <FormattedMessage id="dashboard.addBeverage.title" />
        </Header>
        <Navigation />
        {beverageDataLoadStatus !== StatusEnum.idle ? <Spinner /> : <Form />}
        <Modal />
      </Wrapper>
    </Layout>
  );
};

export default Add;
