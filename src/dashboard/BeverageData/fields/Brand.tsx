import React from 'react';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';
import { InstitutionSelect } from '../elements';
import { Basic as Grid } from '../elements/grids';

type Props = {
  formName: FormName;
  required?: boolean;
};

const Brand: React.FC<Props> = ({ formName, required = false }) => (
  <Grid>
    <Label name={FieldName.brand} form={formName} required={required} />
    <InstitutionSelect name={FieldName.brand} form={formName} />
  </Grid>
);

export default Brand;
