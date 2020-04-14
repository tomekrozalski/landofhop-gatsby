import React from 'react';
import { Formik } from 'formik';

import { initialFormValues, validationSchema } from './utils';
import FormBody from './FormBody';

const Label: React.FC = () => (
  <Formik
    component={FormBody}
    initialValues={initialFormValues}
    isInitialValid={false}
    onSubmit={(values, { setSubmitting }) => {
      console.log('values', values);
      setSubmitting(false);
    }}
    validationSchema={validationSchema}
  />
);

export default Label;
