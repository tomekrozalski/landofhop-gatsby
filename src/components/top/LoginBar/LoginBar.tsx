import React, { useContext } from 'react';
import { Formik } from 'formik';

import {
  AuthenticationContext,
  AuthenticationStatusEnum,
  NavigationContext,
} from 'utils/contexts';
import { Wrapper } from './elements';
import { initialFormValues, validationSchema } from './utils';
import { FormBody, LoginError, LoginSuccess, TokenExpired } from '.';

const LoginBar: React.FC = () => {
  const { authenticationStatus, logIn } = useContext(AuthenticationContext);
  const { loginbar, navbar } = useContext(NavigationContext);

  const renderContent = () => {
    switch (authenticationStatus) {
      case AuthenticationStatusEnum.error:
        return <LoginError />;
      case AuthenticationStatusEnum.expired:
        return <TokenExpired />;
      case AuthenticationStatusEnum.success:
        return <LoginSuccess />;
      case AuthenticationStatusEnum.loading:
      case AuthenticationStatusEnum.idle:
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
