import React from 'react';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { FieldName } from 'dashboard/utils/enums';
import { Condition, InstitutionSelect } from '../elements';
import { Optional as Grid } from '../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
};

const Cooperation: React.FC<Props> = ({ fieldName, formName }) => (
  <Grid>
    <Label name={fieldName} form={formName} />
    <Condition name={fieldName} empty={[]} />
    <InstitutionSelect form={formName} isMulti name={fieldName} />
  </Grid>
);

export default Cooperation;
