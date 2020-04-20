import React from 'react';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { Layout, SEO } from 'components';
import { Spinner } from 'elements';
import { Header, Wrapper } from 'elements/textPage';
import { Status as StatusEnum } from 'dashboard/utils/enums';
import { selectBeverageDetails } from 'dashboard/utils/store/selectors';
import { ProgressBar } from './elements';
import { Label } from '.';

const Add: React.FC = () => {
  const { status } = useSelector(selectBeverageDetails);

  return (
    <Layout>
      <SEO title="addBeverage" />
      <Wrapper>
        <Header>
          <FormattedMessage id="dashboard.addBeverage.title" />
        </Header>
        <ProgressBar />
        {status !== StatusEnum.idle ? <Spinner /> : <Label />}
      </Wrapper>
    </Layout>
  );
};

export default Add;
