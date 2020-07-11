import React from 'react';
import styled from 'styled-components';

import { Danger, Success, Warning } from '.';

const Wrapper = styled.span<{ area?: string; position?: number }>`
  ${({ area }) => area && `grid-column: ${area};`}
  display: block;
  width: 100%;
  position: relative;

  svg {
    display: inline-block;
    position: absolute;
    top: ${({ position }) =>
      position ? `${position}rem` : 'calc(var(--size-input-height) / 2)'};
    transform: translateY(-50%);
  }
`;

type Props = {
  area?: string;
  danger?: boolean;
  error?: string;
  position?: number;
  touched?: boolean;
};

const FieldStatusIndicator: React.FC<Props> = ({
  area,
  children,
  danger = false,
  error,
  position,
  touched = false,
}) => (
  <Wrapper area={area} position={position}>
    {danger && <Danger />}
    {touched && error && <Warning />}
    {touched && !error && <Success />}
    {children}
  </Wrapper>
);

export default FieldStatusIndicator;
