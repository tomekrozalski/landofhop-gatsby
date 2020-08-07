import React from 'react';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { FieldName } from 'dashboard/utils/enums';
import { Condition, ClaritySelect } from '../elements';
import { Optional as Grid } from '../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
};

const Clarity: React.FC<Props> = ({ fieldName, formName }) => (
  <Grid>
    <Label name={fieldName} form={formName} />
    <Condition name={fieldName} empty="" />
    <ClaritySelect form={formName} name={fieldName} />
  </Grid>
);

export default Clarity;
