import React, { useContext } from 'react';
import { Formik } from 'formik';
import { useIntl } from 'gatsby-plugin-intl';

import { Modal } from 'elements';
import { IngredientContext } from 'dashboard/utils/contexts';
import { IngredientInput, IngredientOutput } from 'dashboard/utils/types/form';
import { Ingredient } from '../utils/types';
import { formatData, setInitialValues, validationSchema } from './utils';
import FormBody from './FormBody';

type Props = {
  close: () => void;
  editIngredientData: Ingredient | null;
};

const EditModal: React.FC<Props> = ({ close, editIngredientData }) => {
  const { addNewIngredient } = useContext(IngredientContext);
  const intl = useIntl();

  return (
    <Modal close={close} isVisible={!!editIngredientData}>
      <Formik
        component={FormBody}
        initialValues={
          editIngredientData
            ? setInitialValues({ values: editIngredientData, intl })
            : {}
        }
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
