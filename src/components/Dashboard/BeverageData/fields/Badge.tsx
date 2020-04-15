import React, { useEffect } from 'react';
import { useField } from 'formik';
import slugify from 'slugify';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { FieldName, FormType } from '../utils/enums';
import { Basic as Grid } from '../elements/grids';

type Props = {
  formName: FormName;
  required?: boolean;
};

const Badge: React.FC<Props> = ({ formName, required = false }) => {
  const [nameField] = useField(FieldName.name);
  const [formType] = useField(FieldName.formType);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, meta, { setTouched, setValue }] = useField(FieldName.badge);

  const isAddForm = formType.value === FormType.add;

  useEffect(() => {
    if (isAddForm) {
      setValue(slugify(nameField.value[0].value, { lower: true }));
      if (field.value) {
        setTouched(true);
      }
    }
  }, [nameField.value[0].value]);

  return (
    <Grid>
      <Label name={FieldName.badge} form={formName} required={required} />
      <TextInput name={FieldName.badge} form={formName} disabled={!isAddForm} />
    </Grid>
  );
};

export default Badge;
