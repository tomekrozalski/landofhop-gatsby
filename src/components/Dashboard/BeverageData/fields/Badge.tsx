import React from 'react';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { Basic as Grid } from '../elements/grids';

type Props = {
  fieldName: string;
  formName: FormName;
  required?: boolean;
};

const Badge: React.FC<Props> = ({ fieldName, formName, required = false }) => (
  <Grid>
    <Label name={fieldName} form={formName} required={required} />
    <TextInput name={fieldName} form={formName} />
  </Grid>
);

export default Badge;
