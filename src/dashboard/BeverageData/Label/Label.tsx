import React, { useContext } from 'react';
import { Formik } from 'formik';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import {
  BeverageContext,
  LanguageContext,
  NavigationContext,
} from 'dashboard/utils/contexts';
import { getInitialFormValues, validationSchema } from './utils';
import FormBody from './FormBody';

const Label: React.FC = () => {
  const intl = useIntl();
  const { data } = useContext(BeverageContext);
  const { values: languages } = useContext(LanguageContext);
  const { label, saveLabel, setPart } = useContext(NavigationContext);

  return (
    <Formik
      component={FormBody}
      initialValues={label || getInitialFormValues({ data, intl, languages })}
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
