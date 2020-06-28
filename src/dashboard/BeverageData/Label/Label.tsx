import React, { useContext } from 'react';
import { Formik } from 'formik';

import { FormName } from 'utils/enums';
import { NavigationContext } from 'dashboard/utils/contexts';
import { validationSchema } from './utils';
import FormBody from './FormBody';

const Label: React.FC = () => {
  const { label, saveLabel, setPart } = useContext(NavigationContext);

  return (
    <Formik
      component={FormBody}
      initialValues={label}
      onSubmit={(values, { setSubmitting }) => {
        saveLabel(values);
        setPart(FormName.beverageProducer);
        setSubmitting(false);
      }}
      validationSchema={validationSchema}
      validateOnMount
    />
  );
};

export default Label;
