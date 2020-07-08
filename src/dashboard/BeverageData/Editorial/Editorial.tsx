import React, { useContext } from 'react';
import { Formik } from 'formik';

import { NavigationContext } from 'dashboard/utils/contexts';
import { validationSchema } from './utils';
import FormBody from './FormBody';

const Editorial: React.FC = () => {
  const { saveBeverage, editorial } = useContext(NavigationContext);

  return (
    <Formik
      component={FormBody}
      initialValues={editorial}
      onSubmit={saveBeverage}
      validationSchema={validationSchema}
      validateOnMount
    />
  );
};

export default Editorial;
