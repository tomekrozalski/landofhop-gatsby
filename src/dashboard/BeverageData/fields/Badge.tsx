import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useField } from 'formik';
import slugify from 'slugify';

import { FormName } from 'utils/enums';
import { Label, TextInput } from 'elements';
import { FieldName, FormType } from 'dashboard/utils/enums';
import { selectBeverageDetails } from 'dashboard/utils/store/selectors';
import { Basic as Grid } from '../elements/grids';

type Props = {
  connectedFieldName: FieldName;
  fieldName: FieldName;
  formName: FormName;
  required?: boolean;
};

const Badge: React.FC<Props> = ({
  connectedFieldName,
  fieldName,
  formName,
  required = false,
}) => {
  const { formType } = useSelector(selectBeverageDetails);
  const [nameField] = useField(connectedFieldName);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, meta, { setTouched, setValue }] = useField(fieldName);
  const isAddForm = formType === FormType.add;

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
      <Label name={fieldName} form={formName} required={required} />
      <TextInput name={fieldName} form={formName} disabled={!isAddForm} />
    </Grid>
  );
};

export default Badge;
