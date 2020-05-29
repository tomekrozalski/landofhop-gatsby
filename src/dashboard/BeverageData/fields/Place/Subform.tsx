import React from 'react';
import { Formik } from 'formik';

import { addNewPlace } from 'dashboard/utils/store/actions';
import { initialValues, onSubmit, validationSchema } from './utils';
import { FormBody } from '.';

const Subform = () => (
  <Formik
    component={FormBody}
    initialValues={initialValues}
    onSubmit={onSubmit({ addNewPlace })}
    validationSchema={validationSchema}
    validateOnMount
  />
);

export default Subform;
