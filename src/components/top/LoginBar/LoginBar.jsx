import React, { useContext } from 'react';
import { Formik } from 'formik';

import { AuthenticationContext, NavigationContext } from 'utils/contexts';
import { Wrapper } from './elements';
import FormBody from './FormBody';
import validationSchema from './validationSchema';

const LoginBar = () => {
  const { logIn } = useContext(AuthenticationContext);
  const { loginbar, navbar } = useContext(NavigationContext);

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
        {FormBody}
      </Formik>
    </Wrapper>
  );
};

export default LoginBar;
