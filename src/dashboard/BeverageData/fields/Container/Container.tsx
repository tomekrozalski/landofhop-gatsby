import React from 'react';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { FieldName } from 'dashboard/utils/enums';
import { Five as Grid } from '../../elements/grids';

type Props = {
  disabled?: boolean;
  fieldName: FieldName;
  formName: FormName;
  required?: boolean;
};

const Container: React.FC<Props> = ({
  fieldName,
  formName,
  required = false,
}) => (
  <Grid>
    <Label name={fieldName} form={formName} required={required} />
    <div>type</div>
    <div>material</div>
    <div>color</div>
    <TextInput name={`${fieldName}.value`} form={formName} type="number" />
    <div>unit</div>
  </Grid>
);

export default Container;
