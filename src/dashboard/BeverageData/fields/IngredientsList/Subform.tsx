import React from 'react';
import { Formik } from 'formik';

// import { IngredientContext } from 'dashboard/utils/contexts';
// import { PlaceInput, PlaceOutput } from 'dashboard/utils/types/form';
// import { initialValues, validationSchema } from './utils';
// import formatData from './utils/formatData';
import { FormBody } from '.';

type Props = {
  close: () => void;
};

const Subform = ({ close }: Props) => {
  // const { addNewIngredient } = useContext(IngredientContext);

  return (
    <Formik
      component={FormBody}
      initialValues={{}}
      onSubmit={values => {
        console.log('values', values);
      }}
      // validationSchema={validationSchema}
      validateOnMount
    />
  );
};

export default Subform;
