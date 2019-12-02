import React from 'react';
import styled from 'styled-components';

import ButtonSpinner from './ButtonSpinner';

const Wrapper = styled.button<{ wide: boolean }>`
  display: flex;
  align-items: center;
  width: ${({ wide }) => (wide ? '100%' : 'auto')};
  height: 3.4rem;
  padding: 0 2rem;
  background-color: var(--color-black);
  color: var(--color-white);
  transition: all 0.2s;
  cursor: pointer;

  &.button-submitting {
    padding: 0 1rem 0 1.5rem;
    background-color: var(--color-dark);
    cursor: not-allowed;
    position: relative;

    &:focus {
      outline: none;
    }
  }

  &:disabled {
    background-color: var(--color-dark);
    color: var(--color-brighter);
    cursor: not-allowed;
  }

  &:hover:not(:disabled):not(.button-submitting) {
    background-color: var(--color-dark);
    color: var(--color-black);
  }

  &[type='submit']:not(:disabled):not(.button-submitting):hover {
    background-color: var(--color-success-strong);
    color: var(--color-white);
  }
`;

interface Props {
  isSubmitting?: boolean
}

const Button: React.FC<Props> = ({ children, isSubmitting, ...props }) => (
  <Wrapper className={isSubmitting ? 'button-submitting' : ''} {...props}>
    {children}
    {isSubmitting && <ButtonSpinner />}
  </Wrapper>
);

export default Button;
