import React from 'react';
import styled, { css } from 'styled-components';

import ButtonSpinner from './ButtonSpinner';

export const ButtonBasicCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.4rem;
  transition: background-color var(--transition-default),
    color var(--transition-default);
  cursor: pointer;
`;

const Wrapper = styled.button`
  ${ButtonBasicCSS}
  padding: 0 2rem;
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

  &.go-on:not(:disabled):not(.button-submitting):hover {
    background-color: var(--color-success-strong);
    color: var(--color-white);
  }

  &.move-back:not(:disabled):not(.button-submitting) {
    background-color: var(--color-danger-light);

    &:hover {
      background-color: var(--color-danger-strong);
      color: var(--color-white);
    }
  }
`;

type Props = {
  appearance?: 'moveBack' | 'goOn';
  disabled?: boolean;
  isSubmitting?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'reset' | 'submit';
};

const Button: React.FC<Props> = ({
  appearance = 'goOn',
  children,
  isSubmitting,
  ...props
}) => {
  const classNames = [];

  if (isSubmitting) {
    classNames.push('button-submitting');
  }

  if (appearance === 'moveBack') {
    classNames.push('move-back');
  }

  if (appearance === 'goOn') {
    classNames.push('go-on');
  }

  return (
    <Wrapper className={classNames.join(' ')} {...props}>
      {children}
      {isSubmitting && <ButtonSpinner />}
    </Wrapper>
  );
};

export default Button;
