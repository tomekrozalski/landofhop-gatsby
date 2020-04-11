import React from 'react';
import { FieldAttributes, useField } from 'formik';

import { FormName } from 'utils/enums';
import { getAnchor } from 'utils/helpers';
import { FieldStatusIndicator } from 'elements';
import { Input } from '.';

type Props = {
  area?: string;
  form: FormName;
  invert?: boolean;
  name: string;
};

const TextInput: React.FC<Props & FieldAttributes<{}>> = ({
  area,
  form,
  invert = false,
  name,
}) => {
  const [field, { error, touched }] = useField<{}>(name);

  return (
    <FieldStatusIndicator area={area} error={error} touched={touched}>
      <Input
        {...field}
        id={getAnchor({ form, name })}
        invert={invert}
        name={name}
      />
    </FieldStatusIndicator>
  );
};

export default TextInput;
