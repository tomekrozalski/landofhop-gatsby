import React from 'react';
import styled from 'styled-components';
import { useField } from 'formik';

import { Checkmark as CheckmarkIcon } from 'elements/icons';
import { FieldName } from 'dashboard/utils/enums';

const Wrapper = styled.div<{ on: 1 | 0 }>`
  display: inline-block;
  width: var(--size-input-height);
  height: var(--size-input-height);
  background-color: ${({ on }) =>
    on ? 'var(--color-brighter)' : 'var(--color-brightest)'};
  border-bottom: 1px solid var(--color-dark);
  position: relative;
  cursor: pointer;

  svg {
    width: 2rem;
    position: absolute;
    top: 1rem;
    left: 0.8rem;
    pointer-events: none;

    path {
      fill: var(--color-black);
    }
  }
`;

type Props = {
  empty: [] | string | number;
  name: FieldName;
};

const Condition: React.FC<Props> = ({ empty, name }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, meta, { setTouched, setValue }] = useField(name);

  const onClick = () => {
    if (field.value === null) {
      setValue(empty);
    } else {
      setTouched(false);
      setValue(null);
    }
  };

  return (
    <Wrapper on={field.value !== null ? 1 : 0} onClick={onClick}>
      {field.value !== null && <CheckmarkIcon />}
    </Wrapper>
  );
};

export default Condition;
