import React, { useContext } from 'react';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { FieldName, Subform as SubformEnum } from 'dashboard/utils/enums';
import { NavigationContext } from 'dashboard/utils/contexts';
import { Condition, IngredientSelect, OpenSubform } from '../../elements';
import { Optional as Grid } from '../../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
};

const IngredientsList: React.FC<Props> = ({ fieldName, formName }) => {
  const { setSubform } = useContext(NavigationContext);

  return (
    <Grid>
      <Label name={fieldName} form={formName} />
      <Condition name={fieldName} empty={[]} />
      <IngredientSelect name={fieldName} form={formName} isMulti />
      <OpenSubform
        label="dashboard.addNewIngredient.openButton"
        onClick={() => setSubform(SubformEnum.ingredient)}
      />
    </Grid>
  );
};

export default IngredientsList;
