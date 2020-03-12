import React from 'react';
import styled, { css } from 'styled-components';

import ButtonSpinner from './ButtonSpinner';

export const ButtonBasicCSS = css`
  display: flex;
  align-items: center;
  height: 3.4rem;
  padding: 0 2rem;
  transition: background-color var(--transition-default), color var(--transition-default);
  cursor: pointer;
`;

const Wrapper: any = styled.button<{ wide?: boolean }>`
  ${ButtonBasicCSS}
  width: ${({ wide }) => (wide ? '100%' : 'auto')};
  background-color: var(--color-black);
  color: var(--color-white);

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

  &[type="submit"]:not(:disabled):not(.button-submitting):hover {
    background-color: var(--color-success-strong);
    color: var(--color-white);
  }

  &[type="reset"]:not(:disabled):not(.button-submitting):hover {
    background-color: var(--color-danger-strong);
    color: var(--color-white);
  }
`;

type Props = {
  disabled?: boolean
  isSubmitting?: boolean
  onClick: (e: React.MouseEvent) => void
  type?: string
}

const Button: React.FC<Props> = ({ children, isSubmitting, ...props }) => (
  <Wrapper className={isSubmitting ? 'button-submitting' : ''} {...props}>
    {children}
    {isSubmitting && <ButtonSpinner />}
  </Wrapper>
);

export default Button;
