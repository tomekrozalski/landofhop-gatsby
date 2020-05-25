import React from 'react';
import { Formik } from 'formik';

import { initialValues, validationSchema } from './utils';
import formatData, { Input as InputType } from './utils/formatData';
import { FormBody } from '.';

const Subform = () => (
  <Formik
    component={FormBody}
    initialValues={initialValues}
    onSubmit={(values, { setSubmitting }) => {
      const formattedValues = formatData(values as InputType);

      console.log('formattedValues', formattedValues);
      setSubmitting(false);
    }}
    validationSchema={validationSchema}
    validateOnMount
  />
);

export default Subform;
