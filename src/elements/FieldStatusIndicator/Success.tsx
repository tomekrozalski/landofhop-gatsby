import React from 'react';
import styled from 'styled-components';

import { Checkmark as CheckmarkIcon } from 'elements/icons';

const Wrapper = styled.span`
  svg {
    width: 14px;
    height: 11px;
    right: 0.6rem;
  }
`;

const Success: React.FC = () => (
  <Wrapper>
    <CheckmarkIcon />
  </Wrapper>
);

export default Success;
