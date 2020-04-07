import React, { useContext } from 'react';
import { Formik } from 'formik';

import { FormName } from 'utils/enums';
import { BeverageContext } from 'utils/contexts';
import { Button } from 'elements';
import { FormSection } from '../elements';
import { Badge } from '../fields';

import { validationSchema } from './utils';

const Label: React.FC = () => {
  const { badge } = useContext(BeverageContext);

  return (
    <Formik
      initialErrors={{
        badge: 'required',
        name: 'required',
      }}
      initialValues={{
        badge: '',
        name: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log('values', values);
        setSubmitting(false);
      }}
      validationSchema={validationSchema}
    >
      <FormSection
        description="dashboard.beverage.labelInfo.description"
        title="dashboard.beverage.labelInfo.title"
      >
        <Badge formName={FormName.beverageLabel} required />
        <Badge formName={FormName.beverageLabel} />
        <Button type="submit">submit</Button>
      </FormSection>
    </Formik>
  );
};

export default Label;
