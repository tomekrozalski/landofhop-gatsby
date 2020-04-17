import React, { useContext, useEffect } from 'react';
import { Formik } from 'formik';
import { useIntl } from 'gatsby-plugin-intl';
import { useDispatch, useSelector } from 'react-redux';

import { getAllInstitutions } from 'components/Dashboard/utils/store';
import { BeverageContext } from '../utils/contexts';
import { getInitialFormValues, validationSchema } from './utils';
import FormBody from './FormBody';

const Label: React.FC = () => {
  const { formatMessage } = useIntl();
  const beverage = useContext(BeverageContext);

  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.institutions);

  console.log('isLoading', isLoading);

  useEffect(() => {
    dispatch(getAllInstitutions);
  }, [dispatch]);

  return (
    <Formik
      component={FormBody}
      initialValues={getInitialFormValues(beverage, formatMessage)}
      onSubmit={(values, { setSubmitting }) => {
        console.log('values', values);
        setSubmitting(false);
      }}
      validationSchema={validationSchema}
    />
  );
};

export default Label;
