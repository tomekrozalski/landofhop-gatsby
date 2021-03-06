import React, { useContext, useEffect } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { Spinner } from 'elements';
import { Header, Wrapper } from 'elements/textPage';
import { Status as StatusEnum } from 'utils/enums';
import { FormType } from 'dashboard/utils/enums';
import { NavigationContext, LanguageContext } from 'dashboard/utils/contexts';
import { DashboardModal } from 'dashboard/elements';
import { Navigation } from './elements';
import { Form } from '.';

type Props = {
  location: {
    state?: {
      badge?: string;
      brand?: string;
      shortId?: string;
    };
  };
};

const Update: React.FC<Props> = ({ location }) => {
  const {
    getBeverageDetails,
    resetBeverageDetails,
    beverageDataLoadStatus,
    setBeverageFormType,
  } = useContext(NavigationContext);
  const { status: languageStatus } = useContext(LanguageContext);

  useEffect(() => {
    setBeverageFormType(FormType.update);
  }, []);

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

    return resetBeverageDetails;
  }, [languageStatus]);

  return (
    <Wrapper>
      <Header>
        <FormattedMessage id="dashboard.updateBeverage.title" />
      </Header>
      <Navigation />
      {beverageDataLoadStatus === StatusEnum.fulfilled ? <Form /> : <Spinner />}
      <DashboardModal />
    </Wrapper>
  );
};

export default Update;
