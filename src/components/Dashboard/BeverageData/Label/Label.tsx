import React from 'react';
import { Formik } from 'formik';

import { FormName } from 'utils/enums';
import { Button } from 'elements';
import { FormSection, SubSection } from '../elements';
import { Badge, Name } from '../fields';
import { FieldName, initialFormValues, validationSchema } from './utils';

const Label: React.FC = () => {
  const common = {
    formName: FormName.beverageLabel,
  };

  return (
    <Formik
      initialValues={initialFormValues}
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
        <Badge {...common} fieldName={FieldName.badge} required />
        {/* -------------------------------- */}
        <SubSection title="dashboard.beverage.brandInfo" />
        <Name {...common} fieldName={FieldName.name} required />
        <Button type="submit">submit</Button>
      </FormSection>
    </Formik>
  );
};

export default Label;
