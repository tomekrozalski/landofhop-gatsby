import React, { useContext } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { AuthenticationContext } from 'utils/contexts';
import { addNewPlace } from 'dashboard/utils/api';
import { initialValues, validationSchema } from './utils';
import formatData, { Input as InputType } from './utils/formatData';
import { FormBody } from '.';

type Props = {
  close: () => void;
};

const Subform = ({ close }: Props) => {
  const dispatch = useDispatch();
  const { token } = useContext(AuthenticationContext);

  return (
    <Formik
      component={FormBody}
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        const formattedValues = formatData(values as InputType);

        addNewPlace({ dispatch, token, values: formattedValues }).finally(
          () => {
            setSubmitting(false);
            close();
          },
        );
      }}
      validationSchema={validationSchema}
      validateOnMount
    />
  );
};

export default Subform;
