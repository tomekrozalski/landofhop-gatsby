import React, { useContext } from 'react';
import { Provider } from 'react-redux';

import { AuthenticationStatus as AuthenticationStatusEnum } from 'utils/enums';
import { AuthenticationContext } from 'utils/contexts';
import { Spinner } from 'elements';
import { store } from 'dashboard/utils/store';
import { NotLoggedIn } from '.';

const DashboardWrapper = (Component: any) => (props: any) => {
  const { authenticationStatus } = useContext(AuthenticationContext);

  switch (authenticationStatus) {
    case AuthenticationStatusEnum.loading:
      return <Spinner />;
    case AuthenticationStatusEnum.success:
      return (
        <Provider store={store}>
          <Component {...props} />
        </Provider>
      );
    default:
      return <NotLoggedIn />;
  }
};

export default DashboardWrapper;
