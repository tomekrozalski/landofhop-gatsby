import React from 'react';
import styled from 'styled-components';
import { useField } from 'formik';
import Switch from 'react-switch';

import { FormName } from 'utils/enums';
import { FieldName } from 'dashboard/utils/enums';

export const Wrapper = styled(Switch)`
  .react-switch-bg,
  .react-switch-handle {
    border-radius: 0 !important;
  }
`;

type Props = {
  name: FieldName;
  form: FormName;
};

const StyledSwitch = ({ name, form }: Props) => {
  const [{ value }, , { setValue }] = useField(name);

  return (
    <Wrapper
      checked={value === true}
      disabled={value === null}
      id={`${form}-${name}`.toLowerCase()}
      width={68}
      height={34}
      onChange={setValue}
      offColor="#cccccc"
      onColor="#4cb231"
    />
  );
};

export default StyledSwitch;
