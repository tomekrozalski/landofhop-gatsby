import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { Layout, SEO } from 'components';
import { Spinner } from 'elements';
import { Header, Wrapper } from 'elements/textPage';
import { selectBeverageDetails } from 'dashboard/utils/store/selectors';
import {
  getBeverageDetails,
  resetBeverageDetails,
} from 'dashboard/utils/store/actions';
import { FormType } from 'dashboard/utils/enums';
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
  const { isLoaded } = useSelector(selectBeverageDetails);
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

    return () => {
      dispatch(resetBeverageDetails());
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
        {isLoaded ? <Label /> : <Spinner />}
      </Wrapper>
    </Layout>
  );
};

export default Update;
