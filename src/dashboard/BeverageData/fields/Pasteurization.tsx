import React from 'react';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { FieldName } from 'dashboard/utils/enums';
import { Condition, StyledSwitch } from '../elements';
import { Optional as Grid } from '../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
};

const Pasteurization: React.FC<Props> = ({ fieldName, formName }) => (
  <Grid>
    <Label name={fieldName} form={formName} />
    <Condition name={fieldName} empty={false} />
    <StyledSwitch name={fieldName} form={formName} />
  </Grid>
);

export default Pasteurization;
