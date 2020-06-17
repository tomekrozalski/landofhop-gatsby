import React from 'react';
import styled from 'styled-components';
import isNull from 'lodash/isNull';

import { InputCommon } from '../TextInput/Input';

const StyledTextArea: any = styled.textarea<{
  invert: boolean;
  touched?: boolean;
}>`
  ${InputCommon}
  min-height: 12rem;
  margin-bottom: 1rem;
  padding: ${({ touched }) =>
    touched ? '0.6rem 25px 0.25rem 1rem' : '0.6rem 1rem'};
  line-height: 2.2rem;
  resize: none;
`;

type Props = {
  id: string;
  name: string;
  touched?: boolean;
  value?: any;
};

const Input: React.FC<Props> = props => (
  // eslint-disable-next-line react/destructuring-assignment
  <StyledTextArea {...props} value={isNull(props.value) ? '' : props.value} />
);

export default Input;
