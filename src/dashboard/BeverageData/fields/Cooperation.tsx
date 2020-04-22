import React from 'react';
import { useField } from 'formik';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { BeverageFieldNames as FieldName } from 'dashboard/utils/enums';
import { Condition, InstitutionSelect } from '../elements';
import { Optional as Grid } from '../elements/grids';

type Props = {
  formName: FormName;
};

const Cooperation: React.FC<Props> = ({ formName }) => {
  const [field] = useField(FieldName.cooperation);

  return (
    <Grid>
      <Label name={FieldName.cooperation} form={formName} />
      <Condition name={FieldName.cooperation} empty={[]} />
      <InstitutionSelect
        form={formName}
        isDisabled={field.value === null}
        isMulti
        name={FieldName.cooperation}
      />
    </Grid>
  );
};

export default Cooperation;
