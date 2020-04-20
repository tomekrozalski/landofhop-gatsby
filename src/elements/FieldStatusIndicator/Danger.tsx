import React from 'react';
import styled from 'styled-components';

import { Danger as DangerIcon } from 'elements/icons';

const Wrapper = styled.span`
  svg {
    width: 14px;
    height: 14px;
    right: 0.8rem;
  }
`;

const Danger: React.FC = () => (
  <Wrapper>
    <DangerIcon />
  </Wrapper>
);

export default Danger;
