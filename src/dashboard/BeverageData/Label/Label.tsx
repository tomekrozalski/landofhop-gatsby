import React from 'react';
import { Formik } from 'formik';
import { useIntl } from 'gatsby-plugin-intl';
import { useSelector } from 'react-redux';

import { selectRawBeverageDetails } from 'dashboard/utils/store/selectors';
import { getInitialFormValues, validationSchema } from './utils';
import FormBody from './FormBody';

const Label: React.FC = () => {
  const { formatMessage } = useIntl();
  const data = useSelector(selectRawBeverageDetails);

  return (
    <Formik
      component={FormBody}
      initialValues={getInitialFormValues(data, formatMessage)}
      onSubmit={(values, { setSubmitting }) => {
        console.log('values', values);
        setSubmitting(false);
      }}
      validationSchema={validationSchema}
    />
  );
};

export default Label;
