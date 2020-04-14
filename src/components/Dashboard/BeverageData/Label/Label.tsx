import React, { useContext } from 'react';
import { Formik } from 'formik';

import { BeverageContext } from '../utils/contexts';
import { initialFormValues, validationSchema } from './utils';
import FormBody from './FormBody';

const Label: React.FC = () => {
  const props = useContext(BeverageContext);

  console.log('props', props);

  return (
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
};

export default Label;
