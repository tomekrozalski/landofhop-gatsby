import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { Layout, SEO } from 'components';
import { Spinner } from 'elements';
import { Header, Wrapper } from 'elements/textPage';
import { Status as StatusEnum } from 'dashboard/utils/enums';
import { BeverageContext } from 'dashboard/utils/contexts';
import { Modal } from 'dashboard/elements';
import { Navigation } from './elements';
import { Label } from '.';

const Add: React.FC = () => {
  const { status } = useContext(BeverageContext);

  return (
    <Layout>
      <SEO title="addBeverage" />
      <Wrapper>
        <Header>
          <FormattedMessage id="dashboard.addBeverage.title" />
        </Header>
        <Navigation />
        {status !== StatusEnum.idle ? <Spinner /> : <Label />}
        <Modal />
      </Wrapper>
    </Layout>
  );
};

export default Add;