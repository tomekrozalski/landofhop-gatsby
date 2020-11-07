import React, { useContext, useEffect } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { Spinner } from 'elements';
import { Header, Wrapper } from 'elements/textPage';
import { Status as StatusEnum } from 'utils/enums';
import { FormType } from 'dashboard/utils/enums';
import { NavigationContext } from 'dashboard/utils/contexts';
import { DashboardModal } from 'dashboard/elements';
import { Navigation } from './elements';
import { Form } from '.';

const Add: React.FC = () => {
  const { beverageDataLoadStatus, setBeverageFormType } = useContext(
    NavigationContext,
  );

  useEffect(() => {
    setBeverageFormType(FormType.add);
  }, []);

  return (
    <Wrapper>
      <Header>
        <FormattedMessage id="dashboard.addBeverage.title" />
      </Header>
      <Navigation />
      {beverageDataLoadStatus !== StatusEnum.idle ? <Spinner /> : <Form />}
      <DashboardModal />
    </Wrapper>
  );
};

export default Add;
