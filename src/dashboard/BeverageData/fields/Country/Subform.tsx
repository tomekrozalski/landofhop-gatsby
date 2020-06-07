import React, { useContext } from 'react';
import { Formik } from 'formik';

import { CountryContext } from 'dashboard/utils/contexts';
import { CountryInput, CountryOutput } from 'dashboard/utils/types/form';
import { formatData, initialValues, validationSchema } from './utils';
import { FormBody } from '.';

type Props = {
  close: () => void;
};

const Subform = ({ close }: Props) => {
  const { addNewCountry } = useContext(CountryContext);

  return (
    <Formik
      component={FormBody}
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        const formattedValues = formatData(
          values as CountryInput,
        ) as CountryOutput;

        addNewCountry(formattedValues).finally(() => {
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
