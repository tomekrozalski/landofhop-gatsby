import React from 'react';
import styled from 'styled-components';

import { Warning as WarningIcon } from 'elements/icons';

const Wrapper = styled.span`
  svg {
    width: 14px;
    height: 13px;
    right: 0.8rem;
  }
`;

const Warning: React.FC = () => (
  <Wrapper>
    <WarningIcon />
  </Wrapper>
);

export default Warning;
