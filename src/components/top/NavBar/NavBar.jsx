import React from 'react';
import styled from 'styled-components';

import { breakpoints } from 'utils/theme';
import LangNavigation from './LangNavigation';
import MainNavigation from './MainNavigation';

const Nav = styled.nav`
  display: block;
  width: 100%;
  height: var(--size-navbar-height);
  background: var(--color-white);
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--index-navbar);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: var(--size-container-max-width);
  height: 100%;
  margin: 0 auto;

  @media (min-width: ${breakpoints.md}) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: stretch;
  }
`;

const NavBar = () => (
  <Nav>
    <Container>
      <MainNavigation />
      <LangNavigation />
    </Container>
  </Nav>
);

export default NavBar;
