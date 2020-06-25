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

const Producer: React.FC = () => {
  const intl = useIntl();
  const { data } = useContext(BeverageContext);
  const { values: languages } = useContext(LanguageContext);
  const { saveProducer, setPart } = useContext(NavigationContext);

  return (
    <Formik
      component={FormBody}
      initialValues={{}}
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
