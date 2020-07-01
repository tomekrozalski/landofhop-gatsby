import React from 'react';
import { useField } from 'formik';
import { format } from 'date-fns';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { FieldName } from 'dashboard/utils/enums';
import { Condition } from '../elements';
import { Optional as Grid } from '../elements/grids';

type Props = {
  fieldName: FieldName;
  formName: FormName;
};

const Added: React.FC<Props> = ({ fieldName, formName }) => {
  const [field] = useField(fieldName);

  return (
    <Grid>
      <Label name={fieldName} form={formName} />
      <Condition
        name={fieldName}
        empty={format(new Date(), 'dd.MM.yyyy, HH:mm:ss')}
      />
      <TextInput
        disabled={field.value === null}
        name={fieldName}
        form={formName}
      />
    </Grid>
  );
};

export default Added;
