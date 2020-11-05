import React, { useEffect, useState } from 'react';
import { useField } from 'formik';

import { FormName } from 'utils/enums';
import { Label } from 'elements';
import { FieldName } from 'dashboard/utils/enums';
import { IngredientSelect } from '../elements';
import { Basic as Grid } from '../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
  required?: boolean;
};

const IngredientParent: React.FC<Props> = ({ fieldName, formName }) => {
  const [, , { setValue }] = useField(fieldName);
  const [{ value }] = useField('type');
  const [type, setType] = useState(value.type);

  useEffect(() => {
    setValue('');
    setType(value.type);
  }, [value.type]);

  return (
    <Grid>
      <Label name={fieldName} form={formName} />
      <IngredientSelect
        disabled={!type}
        filterByType={type}
        name={fieldName}
        form={formName}
      />
    </Grid>
  );
};

export default IngredientParent;
