/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled, { css } from 'styled-components';
import isNull from 'lodash/isNull';

export const InputCommon = css`
  display: block;
  width: 100%;
  border: 0;
  border-bottom: 1px solid var(--color-dark);
  box-shadow: none;
  background-color: var(--color-brighter);
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

type StyledProps = {
  invert: boolean;
  touched?: boolean;
};

const StyledInput: any = styled.input<StyledProps>`
  ${InputCommon}
  height: var(--size-input-height);
  padding: ${({ touched }) => (touched ? '0 25px 0 1rem' : '0 1rem')};
  background-color: var(
    ${({ invert }) => (invert ? '--color-white' : '--color-brighter')}
  );
`;

const StyledTextArea: any = styled.textarea<StyledProps>`
  ${InputCommon}
  min-height: 12rem;
  margin-bottom: 1rem;
  padding: ${({ touched }) =>
    touched ? '0.6rem 25px 0.25rem 1rem' : '0.6rem 1rem'};
  line-height: 2.2rem;
  resize: none;
`;

type Props = {
  disabled: boolean;
  id: string;
  invert: boolean;
  name: string;
  textarea: boolean;
  touched?: boolean;
  type: 'text' | 'number';
  value?: any;
};

const Input: React.FC<Props> = props =>
  props.textarea ? (
    <StyledTextArea {...props} value={isNull(props.value) ? '' : props.value} />
  ) : (
    <StyledInput {...props} value={isNull(props.value) ? '' : props.value} />
  );

export default Input;
