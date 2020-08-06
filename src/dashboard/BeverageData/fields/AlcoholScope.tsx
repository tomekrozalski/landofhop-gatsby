import React from 'react';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { FieldName } from 'dashboard/utils/enums';
import { Condition, AlcoholScopeSelect } from '../elements';
import { ConditionalThree as Grid } from '../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
};

const AlcoholScope: React.FC<Props> = ({ fieldName, formName }) => (
  <Grid>
    <Label name={fieldName} form={formName} />
    <Condition
      name={fieldName}
      empty={{
        label: '--',
        value: '-',
      }}
    />
    <AlcoholScopeSelect name={fieldName} form={formName} />
  </Grid>
);

export default AlcoholScope;
