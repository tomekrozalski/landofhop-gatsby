import React from 'react';
import { useField } from 'formik';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { FieldName } from 'dashboard/utils/enums';
import { Condition } from '../elements';
import { Optional as Grid } from '../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
};

const Latitude: React.FC<Props> = ({ fieldName, formName }) => {
  const [field] = useField(fieldName);

  return (
    <Grid>
      <Label name={fieldName} form={formName} />
      <Condition name={fieldName} empty={0} />
      <TextInput
        disabled={field.value === null}
        name={fieldName}
        form={formName}
        type="number"
      />
    </Grid>
  );
};

export default Latitude;
