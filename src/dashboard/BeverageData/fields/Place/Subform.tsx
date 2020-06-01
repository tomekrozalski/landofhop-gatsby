import React, { useContext } from 'react';
import { Formik } from 'formik';

import { PlaceContext } from 'dashboard/utils/contexts';
import { PlaceInput, PlaceOutput } from 'dashboard/utils/types/form';
import { initialValues, validationSchema } from './utils';
import formatData from './utils/formatData';
import { FormBody } from '.';

type Props = {
  close: () => void;
};

const Subform = ({ close }: Props) => {
  const { addNewPlace } = useContext(PlaceContext);

  return (
    <Formik
      component={FormBody}
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        const formattedValues = formatData(values as PlaceInput) as PlaceOutput;

        addNewPlace(formattedValues).finally(() => {
          setSubmitting(false);
          close();
        });
      }}
      validationSchema={validationSchema}
      validateOnMount
    />
  );
};

export default Subform;
