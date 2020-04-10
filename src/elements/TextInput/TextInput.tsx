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
  ...props
}) => {
  const [field, { error, touched }] = useField<{}>(props);
  const { name } = props;

  return (
    <FieldStatusIndicator area={area} error={error} touched={touched}>
      <Input
        {...field}
        {...props}
        id={getAnchor({ form, name })}
        invert={invert}
      />
    </FieldStatusIndicator>
  );
};

export default TextInput;
