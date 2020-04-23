import React from 'react';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';
import { Condition, InstitutionSelect } from '../elements';
import { Optional as Grid } from '../elements/grids';

type Props = {
  formName: FormName;
};

const Contract: React.FC<Props> = ({ formName }) => (
  <Grid>
    <Label name={FieldName.contract} form={formName} />
    <Condition name={FieldName.contract} empty="" />
    <InstitutionSelect form={formName} name={FieldName.contract} />
  </Grid>
);

export default Contract;
