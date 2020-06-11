import React, { useContext } from 'react';
import { Formik } from 'formik';

import { LanguageContext } from 'dashboard/utils/contexts';
import { LanguageInput, LanguageOutput } from 'dashboard/utils/types/form';
import { formatData, initialValues, validationSchema } from './utils';
import { FormBody } from '.';

type Props = {
  close: () => void;
};

const Subform = ({ close }: Props) => {
  const { addNewLanguage } = useContext(LanguageContext);

  return (
    <Formik
      component={FormBody}
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        const formattedValues = formatData(
          values as LanguageInput,
        ) as LanguageOutput;

        addNewLanguage(formattedValues).finally(() => {
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
