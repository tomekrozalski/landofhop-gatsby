import React from 'react';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { PlaceFieldNames as FieldName } from 'dashboard/utils/enums';
import { CountrySelect } from '../elements';
import { Basic as Grid } from '../elements/grids';

type Props = {
  formName: FormName;
  required?: boolean;
};

const Country: React.FC<Props> = ({ formName, required = false }) => (
  <Grid>
    <Label name={FieldName.country} form={formName} required={required} />
    <CountrySelect form={formName} name={FieldName.country} />
  </Grid>
);

export default Country;
