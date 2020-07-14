import React from 'react';
import { useField } from 'formik';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { FieldName } from 'dashboard/utils/enums';
import { Condition, ExpirationDateUnitSelect } from '../elements';
import { ConditionalDouble as Grid } from '../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
};

const ExpirationDate: React.FC<Props> = ({ fieldName, formName }) => {
  const [field] = useField(fieldName);

  return (
    <Grid>
      <Label name={fieldName} form={formName} />
      <Condition
        name={fieldName}
        empty={{
          value: 0,
          unit: '',
        }}
      />
      <TextInput
        disabled={field.value === null}
        name={`${fieldName}.value`}
        form={formName}
        type="number"
      />
      <ExpirationDateUnitSelect name={`${fieldName}.unit`} form={formName} />
    </Grid>
  );
};

export default ExpirationDate;
