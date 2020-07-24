import React from 'react';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { FieldName } from 'dashboard/utils/enums';
import { IngredientTypeSelect } from '../elements';
import { Basic as Grid } from '../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
  required?: boolean;
};

const IngredientType: React.FC<Props> = ({ fieldName, formName, required }) => (
  <Grid>
    <Label name={fieldName} form={formName} required={required} />
    <IngredientTypeSelect name={fieldName} form={formName} />
  </Grid>
);

export default IngredientType;
