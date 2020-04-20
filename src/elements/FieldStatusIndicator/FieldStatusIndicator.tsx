import React from 'react';
import styled from 'styled-components';

import { Danger, Success, Warning } from '.';

const Wrapper = styled.span<{ area?: string }>`
  ${({ area }) => area && `grid-column: ${area};`}
  display: block;
  width: 100%;
  position: relative;

  svg {
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

type Props = {
  area?: string;
  danger?: boolean;
  error?: string;
  touched?: boolean;
};

const FieldStatusIndicator: React.FC<Props> = ({
  area,
  children,
  danger = false,
  error,
  touched = false,
}) => (
  <Wrapper area={area}>
    {danger && <Danger />}
    {touched && error && <Warning />}
    {touched && !error && <Success />}
    {children}
  </Wrapper>
);

export default FieldStatusIndicator;
