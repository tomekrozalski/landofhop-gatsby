import React, { useContext } from 'react';
import { Formik } from 'formik';

import { NavigationContext } from 'dashboard/utils/contexts';
import { validationSchema } from './utils';
import FormBody from './FormBody';

const Editorial: React.FC = () => {
  const { editorial, saveEditorial } = useContext(NavigationContext);

  return (
    <Formik
      component={FormBody}
      initialValues={editorial}
      onSubmit={(values, { setSubmitting }) => {
        saveEditorial(values);

        setSubmitting(false);
      }}
      validationSchema={validationSchema}
      validateOnMount
    />
  );
};

export default Editorial;
