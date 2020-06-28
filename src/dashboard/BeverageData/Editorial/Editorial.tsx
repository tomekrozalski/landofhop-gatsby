import React, { useContext } from 'react';
import { Formik } from 'formik';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { LanguageContext, NavigationContext } from 'dashboard/utils/contexts';
import { validationSchema } from './utils';
import FormBody from './FormBody';

const Editorial: React.FC = () => {
  const intl = useIntl();
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
