import React from 'react';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { SelectType } from 'components/Dashboard/utils/enums';
import { Select } from '../elements';
import { FieldName } from '../utils/enums';
import { Basic as Grid } from '../elements/grids';

type Props = {
  formName: FormName;
  required?: boolean;
};

const Brand: React.FC<Props> = ({ formName, required = false }) => (
  <Grid>
    <Label name={FieldName.brand} form={formName} required={required} />
    <Select
      name={FieldName.brand}
      form={formName}
      type={SelectType.institution}
    />
  </Grid>
);

export default Brand;
