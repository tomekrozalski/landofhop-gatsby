import React, { useContext } from 'react';
import styled from 'styled-components';

import { breakpoints } from 'utils/theme';
import { NavigationContext } from 'utils/contexts';
import LangNavigation from './LangNavigation';
import MainNavigation from './MainNavigation';

const Nav = styled.nav<{ isActive: boolean }>`
  display: block;
  width: 100%;
  height: var(--size-navbar-height);
  background: var(--color-white);
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--index-navbar);

  @media (max-width: ${breakpoints.md}) {
    transform: translateY(${({ isActive }) => (isActive ? 0 : 'calc(var(--size-navbar-height) * -1)')});
    transition: transform var(--transition-default);
  }
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

const NavBar: React.FC = () => {
  const { navbar } = useContext(NavigationContext);

  return (
    <Nav isActive={navbar}>
      <Container>
        <MainNavigation />
        <LangNavigation />
      </Container>
    </Nav>
  );
}

export default NavBar;
