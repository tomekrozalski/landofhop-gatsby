import React, { useEffect } from 'react';
import { useField } from 'formik';
import slugify from 'slugify';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { FieldName } from 'dashboard/utils/enums';
import { Basic as Grid } from '../elements/grids';

type Props = {
  connectedFieldName: FieldName;
  disabled?: boolean;
  fieldName: FieldName;
  formName: FormName;
  required?: boolean;
};

const Badge: React.FC<Props> = ({
  connectedFieldName,
  disabled,
  fieldName,
  formName,
  required = false,
}) => {
  const [nameField] = useField(connectedFieldName);
  const [field, , { setTouched, setValue }] = useField(fieldName);

  useEffect(() => {
    if (!disabled) {
      setValue(slugify(nameField.value[0].value, { lower: true }));
      if (field.value) {
        setTouched(true);
      }
    }
  }, [nameField.value[0].value]);

  return (
    <Grid>
      <Label name={fieldName} form={formName} required={required} />
      <TextInput name={fieldName} form={formName} disabled={disabled} />
    </Grid>
  );
};

export default Badge;
