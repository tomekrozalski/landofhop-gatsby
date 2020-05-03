import React from 'react';
import { Formik } from 'formik';

import { FormBody } from '.';

const Subform = () => (
  <Formik
    component={FormBody}
    initialValues={{
      name: [
        {
          language: '',
          value: '',
        },
      ],
    }}
    onSubmit={(values, { setSubmitting }) => {
      console.log('values', values);
      setSubmitting(false);
    }}
  />
);

export default Subform;
