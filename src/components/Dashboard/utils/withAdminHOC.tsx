import React, { useContext } from 'react';

import { AuthenticationStatus as AuthenticationStatusEnum } from 'utils/enums';
import { AuthenticationContext } from 'utils/contexts';
import { Spinner } from 'elements';
import { NotLoggedIn } from '.';

const withAdminHOC = (Component: any) => (props: any) => {
  const { authenticationStatus } = useContext(AuthenticationContext);

  switch (authenticationStatus) {
    case AuthenticationStatusEnum.loading:
      return <Spinner />;
    case AuthenticationStatusEnum.success:
      return <Component {...props} />;
    default:
      return <NotLoggedIn />;
  }
};

export default withAdminHOC;
