import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { Layout, SEO } from 'components';
import { Header, Wrapper } from 'elements/textPage';
import { FormType } from 'dashboard/utils/enums';
import { getBeverageDetails } from 'dashboard/utils/store/actions';
import { ProgressBar } from './elements';

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
  const dispatch = useDispatch();

  useEffect(() => {
    const badge = location.state?.badge;
    const brand = location.state?.brand;
    const shortId = location.state?.shortId;

    if (badge && brand && shortId) {
      dispatch(
        getBeverageDetails({
          badge,
          brand,
          formType: FormType.update,
          shortId,
        }),
      );
    }
  }, [dispatch]);

  return (
    <Layout>
      <SEO title="updateBeverage" />
      <Wrapper>
        <Header>
          <FormattedMessage id="dashboard.updateBeverage.title" />
        </Header>
        <ProgressBar />
        {/* <Label /> */}
        <div>Label</div>
      </Wrapper>
    </Layout>
  );
};

export default Update;
