import React from 'react';
import { FieldAttributes, useField } from 'formik';

import { FormName } from 'utils/enums';
import { getAnchor } from 'utils/helpers';
import { FieldStatusIndicator } from 'elements';
import { Input } from '.';

type Props = {
  area?: string;
  disabled?: boolean;
  form: FormName;
  invert?: boolean;
  name: string;
  type?: 'text' | 'number';
  textarea?: boolean;
};

const TextInput: React.FC<Props & FieldAttributes<{}>> = ({
  area,
  disabled = false,
  form,
  invert = false,
  name,
  textarea = false,
  type = 'text',
}) => {
  const [field, { error, touched }] = useField<{}>(name);

  return (
    <FieldStatusIndicator area={area} error={error} touched={touched}>
      <Input
        {...field}
        disabled={disabled}
        id={getAnchor({ form, name })}
        invert={invert}
        name={name}
        textarea={textarea}
        touched={touched}
        type={type}
      />
    </FieldStatusIndicator>
  );
};

export default TextInput;
