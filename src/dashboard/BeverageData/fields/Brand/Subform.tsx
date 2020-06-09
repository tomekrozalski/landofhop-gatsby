import React, { useContext } from 'react';
import { Formik } from 'formik';

import { InstitutionContext } from 'dashboard/utils/contexts';
import {
  InstitutionInput,
  InstitutionOutput,
} from 'dashboard/utils/types/form';
import { formatData, initialValues, validationSchema } from './utils';
import { FormBody } from '.';

type Props = {
  close: () => void;
};

const Subform = ({ close }: Props) => {
  const { addNewInstitution } = useContext(InstitutionContext);

  return (
    <Formik
      component={FormBody}
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        const formattedValues = formatData(
          values as InstitutionInput,
        ) as InstitutionOutput;

        addNewInstitution(formattedValues).finally(() => {
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
