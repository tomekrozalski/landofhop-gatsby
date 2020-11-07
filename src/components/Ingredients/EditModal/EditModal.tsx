import React, { useContext } from 'react';
import { Formik } from 'formik';

import { Modal } from 'elements';
import { IngredientContext } from 'dashboard/utils/contexts';
import { IngredientInput, IngredientOutput } from 'dashboard/utils/types/form';
import { formatData, initialValues, validationSchema } from './utils';
import FormBody from './FormBody';

type Props = {
  close: () => void;
  isVisible: boolean;
};

const EditModal: React.FC<Props> = ({ close, isVisible }) => {
  const { addNewIngredient } = useContext(IngredientContext);

  return (
    <Modal close={close} isVisible={isVisible}>
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
    </Modal>
  );
};

export default EditModal;
