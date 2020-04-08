import React, { useContext } from 'react';
import { Formik } from 'formik';

import { AuthenticationStatus } from 'utils/enums';
import { AuthenticationContext, NavigationContext } from 'utils/contexts';
import { Wrapper } from './elements';
import { initialFormValues, validationSchema } from './utils';
import { FormBody, LoginError, LoginSuccess, TokenExpired } from '.';

const LoginBar: React.FC = () => {
  const { authenticationStatus, logIn } = useContext(AuthenticationContext);
  const { loginbar, navbar } = useContext(NavigationContext);

  const renderContent = () => {
    switch (authenticationStatus) {
      case AuthenticationStatus.error:
        return <LoginError />;
      case AuthenticationStatus.expired:
        return <TokenExpired />;
      case AuthenticationStatus.success:
        return <LoginSuccess />;
      case AuthenticationStatus.loading:
      case AuthenticationStatus.idle:
      default:
        return FormBody;
    }
  };

  return (
    <Wrapper isActive={loginbar} isNavbar={navbar}>
      <Formik
        initialValues={initialFormValues}
        onSubmit={(values, { setSubmitting }) => {
          logIn(values).then(() => {
            setSubmitting(false);
          });
        }}
        validationSchema={validationSchema}
      >
        {renderContent()}
      </Formik>
    </Wrapper>
  );
};

export default LoginBar;
