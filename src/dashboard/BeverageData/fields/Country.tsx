import React from 'react';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { FieldName } from 'dashboard/utils/enums';
import { CountrySelect } from '../elements';
import { Basic as Grid } from '../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
  required?: boolean;
};

const Country: React.FC<Props> = ({
  fieldName,
  formName,
  required = false,
}) => (
  <Grid>
    <Label name={fieldName} form={formName} required={required} />
    <CountrySelect form={formName} name={fieldName} />
  </Grid>
);

export default Country;
