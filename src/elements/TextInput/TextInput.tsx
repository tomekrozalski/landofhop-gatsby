import React from 'react';
import { FieldAttributes, useField } from 'formik';

import { FormName } from 'utils/enums';
import { getAnchor } from 'utils/helpers';
import { FieldStatusIndicator, Input } from '.';

type Props = {
  formName: FormName;
  invert?: boolean;
  name: string;
  span?: string;
};

const TextInput: React.FC<Props & FieldAttributes<{}>> = ({
  formName,
  invert = false,
  span,
  ...props
}) => {
  const [field, { error, touched }] = useField<{}>(props);
  const { name } = props;
  const inputProps = {
    ...field,
    ...props,
    id: getAnchor({ formName, name }),
    invert,
  };

  return touched ? (
    <FieldStatusIndicator error={error} span={span}>
      <Input {...inputProps} />
    </FieldStatusIndicator>
  ) : (
    <Input {...inputProps} />
  );
};

export default TextInput;
