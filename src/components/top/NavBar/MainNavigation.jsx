import React from 'react';
import styled from 'styled-components';

import ListOfLinks from './ListOfLinks';

const Wrapper = styled.div`
  display: flex;
  margin: 0 0.5rem;
`;

const MainNavigation = () => (
  <Wrapper>
    {/* <Authorization /> */}
    <ListOfLinks />
  </Wrapper>
);

export default MainNavigation;
