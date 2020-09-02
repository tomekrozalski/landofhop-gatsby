import React, { useContext, useEffect } from 'react';

import { Layout, SEO } from 'components';
import {
  AuthenticationContext,
  AuthenticationStatusEnum,
} from 'utils/contexts';
import { Spinner } from 'elements';
import DashboardStateProvider from 'dashboard/utils/contexts';
import { NotLoggedIn } from '.';

const DashboardWrapper = (Component: any, title: string) => (props: any) => {
  const { authenticationStatus, checkTokenExpiration, token } = useContext(
    AuthenticationContext,
  );

  useEffect(() => {
    if (token) {
      checkTokenExpiration(token).catch(() => {
        // eslint-disable-next-line no-console
        console.warn('logged out');
      });
    }
  }, [token]);

  const getContent = () => {
    switch (authenticationStatus) {
      case AuthenticationStatusEnum.loading:
        return <Spinner />;
      case AuthenticationStatusEnum.success:
      case AuthenticationStatusEnum.expired:
      case AuthenticationStatusEnum.retry:
        return (
          <DashboardStateProvider>
            <Component {...props} />
          </DashboardStateProvider>
        );
      default:
        return <NotLoggedIn />;
    }
  };

  return (
    <Layout>
      <SEO title={title} />
      {getContent()}
    </Layout>
  );
};

export default DashboardWrapper;
