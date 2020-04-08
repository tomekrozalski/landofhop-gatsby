import React from 'react';
import { FieldAttributes, useField } from 'formik';

import { FormName } from 'utils/enums';
import { getAnchor } from 'utils/helpers';
import { FieldStatusIndicator, Input } from '.';

type Props = {
  form: FormName;
  invert?: boolean;
  name: string;
};

const TextInput: React.FC<Props & FieldAttributes<{}>> = ({
  form,
  invert = false,
  ...props
}) => {
  const [field, { error, touched }] = useField<{}>(props);
  const { name } = props;
  const inputProps = {
    ...field,
    ...props,
    id: getAnchor({ form, name }),
    invert,
  };

  return touched ? (
    <FieldStatusIndicator error={error}>
      <Input {...inputProps} />
    </FieldStatusIndicator>
  ) : (
    <Input {...inputProps} />
  );
};

export default TextInput;
