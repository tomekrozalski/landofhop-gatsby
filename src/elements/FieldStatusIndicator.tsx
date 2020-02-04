import React from 'react';
import styled from 'styled-components';

import { Checkmark, Warning } from 'elements/icons';

const Wrapper = styled.span`
  display: block;
  width: 100%;
  position: relative;
`;

const IconWrapper = styled.span<{ type: 'warning' | 'success' }>`
  svg {
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    ${({ type }) => (type === 'warning' ? `
      width: 14px;
      height: 13px;
      right: 0.8rem;
    ` : `
      width: 14px;
      height: 11px;
      right: 0.6rem;
    `)}
  }
`;

type Props = {
  error?: string
}

const FieldStatusIndicator: React.FC<Props> = ({ children, error }) => (
  <Wrapper>
    {error
      ? <IconWrapper type="warning"><Warning /></IconWrapper>
      : <IconWrapper type="success"><Checkmark /></IconWrapper>
    }
    {children}
  </Wrapper>
);

export default FieldStatusIndicator;
