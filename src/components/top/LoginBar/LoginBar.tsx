import React, { useContext } from 'react';
import { Formik } from 'formik';

import { AuthenticationContext, NavigationContext } from 'utils/contexts';
import { Wrapper } from './elements';
import {
  FormBody,
  LoginError,
  LoginSuccess,
  TokenExpired,
  validationSchema,
} from '.';

const LoginBar: React.FC = () => {
  const { authenticationStatus, logIn } = useContext(AuthenticationContext);
  const { loginbar, navbar } = useContext(NavigationContext);

  const renderContent = () => {
    switch (authenticationStatus) {
      case 'error':
        return <LoginError />;
      case 'expired':
        return <TokenExpired />;
      case 'success':
        return <LoginSuccess />;
      case 'idle':
      default:
        return FormBody;
    }
  }

  return (
    <Wrapper isActive={loginbar} isNavbar={navbar}>
      <Formik
        initialErrors={{
          email: 'required',
          password: 'required',
        }}
        initialValues={{
          email: '',
          password: '',
        }}
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
