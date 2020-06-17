import React from 'react';
import { FieldAttributes, useField } from 'formik';

import { FormName } from 'utils/enums';
import { getAnchor } from 'utils/helpers';
import { FieldStatusIndicator } from 'elements';
import { Input } from '.';

type Props = {
  form: FormName;
  name: string;
};

const TextArea: React.FC<Props & FieldAttributes<{}>> = ({ form, name }) => {
  const [field, { error, touched }] = useField<{}>(name);

  return (
    <FieldStatusIndicator error={error} touched={touched}>
      <Input
        {...field}
        id={getAnchor({ form, name })}
        name={name}
        touched={touched}
      />
    </FieldStatusIndicator>
  );
};

export default TextArea;
