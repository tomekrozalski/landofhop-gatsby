import React, { useContext, useEffect } from 'react';

import {
  AuthenticationContext,
  AuthenticationStatusEnum,
} from 'utils/contexts';
import { Spinner } from 'elements';
import DashboardStateProvider from 'dashboard/utils/contexts';
import { NotLoggedIn } from '.';

const DashboardWrapper = (Component: any) => (props: any) => {
  const { authenticationStatus, checkTokenExpiration, token } = useContext(
    AuthenticationContext,
  );

  useEffect(() => {
    if (token) checkTokenExpiration(token);
  }, [token]);

  switch (authenticationStatus) {
    case AuthenticationStatusEnum.loading:
      return <Spinner />;
    case AuthenticationStatusEnum.success:
      return (
        <DashboardStateProvider>
          <Component {...props} />
        </DashboardStateProvider>
      );
    default:
      return <NotLoggedIn />;
  }
};

export default DashboardWrapper;
