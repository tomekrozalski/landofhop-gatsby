import React, { useContext } from 'react';
import { Formik } from 'formik';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import {
  BeverageContext,
  LanguageContext,
  NavigationContext,
} from 'dashboard/utils/contexts';
import { validationSchema } from './utils';
import FormBody from './FormBody';

const Editorial: React.FC = () => {
  const intl = useIntl();
  const { data } = useContext(BeverageContext);
  const { values: languages } = useContext(LanguageContext);
  const { saveEditorial } = useContext(NavigationContext);

  return (
    <Formik
      component={FormBody}
      initialValues={{
        notes: null,
      }}
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
