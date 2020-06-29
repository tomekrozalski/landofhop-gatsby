import React, { useContext, useEffect } from 'react';

import { AuthenticationStatus as AuthenticationStatusEnum } from 'utils/enums';
import { AuthenticationContext } from 'utils/contexts';
import { Spinner } from 'elements';
import DashboardStateProvider from 'dashboard/utils/contexts';
import { NotLoggedIn } from '.';

const DashboardWrapper = (Component: any) => (props: any) => {
  const { authenticationStatus } = useContext(AuthenticationContext);

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
