import React, { useEffect } from 'react';
import { useField } from 'formik';
import slugify from 'slugify';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { Basic as Grid } from '../elements/grids';

type Props = {
  fieldName: string;
  formName: FormName;
  required?: boolean;
};

const Badge: React.FC<Props> = ({ fieldName, formName, required = false }) => {
  const [nameField] = useField('name');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, meta, { setTouched, setValue }] = useField(fieldName);

  useEffect(() => {
    setValue(slugify(nameField.value[0].value, { lower: true }));
    if (field.value) {
      setTouched(true);
    }
  }, [nameField.value[0].value]);

  return (
    <Grid>
      <Label name={fieldName} form={formName} required={required} />
      <TextInput name={fieldName} form={formName} />
    </Grid>
  );
};

export default Badge;
