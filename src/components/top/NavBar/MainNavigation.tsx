import React from 'react';
import styled from 'styled-components';

import Authorization from './Authorization';
import ListOfLinks from './ListOfLinks';

const Wrapper = styled.div`
  display: flex;
  margin: 0 0.5rem;
`;

const MainNavigation: React.FC = () => (
  <Wrapper>
    <Authorization />
    <ListOfLinks />
  </Wrapper>
);

export default MainNavigation;
