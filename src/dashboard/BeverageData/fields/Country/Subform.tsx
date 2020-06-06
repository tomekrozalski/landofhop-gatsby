import React, { useContext } from 'react';
import { Formik } from 'formik';

import { PlaceContext } from 'dashboard/utils/contexts';
// import { PlaceInput, PlaceOutput } from 'dashboard/utils/types/form';
// --
import { FormBody } from '.';

type Props = {
  close: () => void;
};

const Subform = ({ close }: Props) => {
  // const { addNewPlace } = useContext(PlaceContext);

  return (
    <Formik
      component={FormBody}
      initialValues={{}}
      onSubmit={(values, { setSubmitting }) => {
        console.log('values', values);
        setSubmitting(false);
        close();
      }}
      validateOnMount
    />
  );
};

export default Subform;
