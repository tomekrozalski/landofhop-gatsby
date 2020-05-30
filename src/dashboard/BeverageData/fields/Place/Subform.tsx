import React, { useContext } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { AuthenticationContext } from 'utils/contexts';
import { addNewPlace } from 'dashboard/utils/store/actions';
import { initialValues, onSubmit, validationSchema } from './utils';
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
      onSubmit={onSubmit({ addNewPlace, close, dispatch, token })}
      validationSchema={validationSchema}
      validateOnMount
    />
  );
};

export default Subform;
