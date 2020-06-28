import React, { useContext } from 'react';
import { Formik } from 'formik';

import { FormName } from 'utils/enums';
import { NavigationContext } from 'dashboard/utils/contexts';
import { validationSchema } from './utils';
import FormBody from './FormBody';

const Producer: React.FC = () => {
  const { producer, saveProducer, setPart } = useContext(NavigationContext);

  return (
    <Formik
      component={FormBody}
      initialValues={producer}
      onSubmit={(values, { setSubmitting }) => {
        saveProducer(values);
        setPart(FormName.beverageEditorial);
        setSubmitting(false);
      }}
      validationSchema={validationSchema}
      validateOnMount
    />
  );
};

export default Producer;
