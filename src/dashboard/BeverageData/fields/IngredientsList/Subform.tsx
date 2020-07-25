import React, { useContext } from 'react';
import { Formik } from 'formik';

import { IngredientContext } from 'dashboard/utils/contexts';
import { IngredientInput, IngredientOutput } from 'dashboard/utils/types/form';
import { formatData, initialValues, validationSchema } from './utils';
import { FormBody } from '.';

type Props = {
  close: () => void;
};

const Subform = ({ close }: Props) => {
  const { addNewIngredient } = useContext(IngredientContext);

  return (
    <Formik
      component={FormBody}
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        const formattedValues = formatData(
          values as IngredientInput,
        ) as IngredientOutput;

        addNewIngredient(formattedValues).finally(() => {
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
