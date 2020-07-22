import React from 'react';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { IngredientType } from 'components/BeverageDetails/utils/enums';
import { FieldName } from 'dashboard/utils/enums';
import { Condition, IngredientSelect } from '../elements';
import { Optional as Grid } from '../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
};

const DryHopped: React.FC<Props> = ({ fieldName, formName }) => (
  <Grid>
    <Label name={fieldName} form={formName} />
    <Condition name={fieldName} empty={[]} />
    <IngredientSelect
      filterByType={IngredientType.hop}
      name={fieldName}
      form={formName}
    />
  </Grid>
);

export default DryHopped;
