import React from 'react';
import { Formik } from 'formik';

import { initialValues, validationSchema } from './utils';
import { FormBody } from '.';

const Subform = () => (
  <Formik
    component={FormBody}
    initialValues={initialValues}
    onSubmit={(values, { setSubmitting }) => {
      console.log('values', values);
      setSubmitting(false);
    }}
    validationSchema={validationSchema}
    validateOnMount
  />
);

export default Subform;
