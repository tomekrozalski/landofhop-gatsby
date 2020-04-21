import React from 'react';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';
import { InstitutionSelect } from '../elements';
import { Optional as Grid } from '../elements/grids';

type Props = {
  formName: FormName;
};

const Cooperation: React.FC<Props> = ({ formName }) => {
  console.log('Cooperation');

  return (
    <Grid>
      <Label name={FieldName.cooperation} form={formName} />
      <div>x</div>
      <InstitutionSelect name={FieldName.cooperation} form={formName} />
    </Grid>
  );
};

export default Cooperation;
