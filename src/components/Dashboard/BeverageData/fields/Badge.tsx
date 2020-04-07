import React from 'react';

import { FieldName, FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { Basic as Grid } from '../elements/grids';

type Props = {
  formName: FormName;
  required?: boolean;
};

const Badge: React.FC<Props> = ({ formName, required = false }) => (
  <Grid>
    <Label name={FieldName.badge} form={formName} required={required} />
    <TextInput name={FieldName.badge} form={formName} />
  </Grid>
);

export default Badge;
