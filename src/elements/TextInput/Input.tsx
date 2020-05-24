import React from 'react';
import styled from 'styled-components';
import isNull from 'lodash/isNull';

const StyledInput: any = styled.input<{ invert: boolean; touched?: boolean }>`
  display: block;
  width: 100%;
  height: var(--size-input-height);
  border: 0;
  border-bottom: 1px solid var(--color-dark);
  box-shadow: none;
  padding: ${({ touched }) => (touched ? '0 25px 0 1rem' : '0 1rem')};
  background-color: var(
    ${({ invert }) => (invert ? '--color-white' : '--color-brighter')}
  );
  font: var(--font-weight-light) 1.6rem / 1 var(--font-primary);
  color: var(--color-black);

  &:focus {
    outline: none;
    border-bottom-color: var(--color-black);
  }

  &:disabled {
    border-bottom: 1px solid var(--color-bright);
    background-color: var(--color-brightest);
    color: var(--color-darker);
    cursor: not-allowed;
  }
`;

type Props = {
  disabled: boolean;
  id: string;
  invert: boolean;
  name: string;
  touched?: boolean;
  type: 'text' | 'number';
  value?: any;
};

const Input: React.FC<Props> = props => (
  // eslint-disable-next-line react/destructuring-assignment
  <StyledInput {...props} value={isNull(props.value) ? '' : props.value} />
);

export default Input;
