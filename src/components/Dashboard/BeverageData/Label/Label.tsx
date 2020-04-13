import React, { useContext } from 'react';
import { Formik } from 'formik';
import { useIntl } from 'gatsby-plugin-intl';

import { BeverageContext } from 'utils/contexts';
import { getInitialFormValues, validationSchema } from './utils';
import FormBody from './FormBody';

const Label: React.FC = () => {
  const { formatMessage } = useIntl();
  const beverageData = useContext(BeverageContext);
  const initialFormValues = getInitialFormValues(beverageData, formatMessage);

  console.log('initialFormValues', initialFormValues);

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
