import React from 'react';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { FieldName } from 'dashboard/utils/enums';
import { Basic as Grid } from '../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
  required?: boolean;
};

const Code: React.FC<Props> = ({ fieldName, formName, required = false }) => (
  <Grid>
    <Label name={fieldName} form={formName} required={required} />
    <TextInput name={fieldName} form={formName} />
  </Grid>
);

export default Code;
