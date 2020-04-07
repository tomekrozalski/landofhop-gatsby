import React from 'react';
import styled from 'styled-components';

const StyledInput: any = styled.input<{ invert: boolean }>`
  display: block;
  width: 100%;
  height: var(--size-input-height);
  border: 0;
  border-bottom: 1px solid var(--color-dark);
  padding: 0 25px 0 1rem;
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
  id: string;
  invert: boolean;
};

const Input: React.FC<Props> = props => <StyledInput {...props} />;

export default Input;
