import React, { useContext } from 'react';
import styled from 'styled-components';

import { NavigationContext } from 'utils/contexts';
import Logo from './Logo';
import NavigationSwitcher from './NavigationSwitcher';
import SearchbarSwitcher from './SearchbarSwitcher';

const Wrapper = styled.header`
  display: block;
  width: 100%;
  background-color: var(--color-black);
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--index-header);
  transform: translateY(
    ${({ isLoginbar, isNavbar }) => {
      if (isNavbar) {
        return 'var(--size-navbar-height)';
      }

      if (isLoginbar) {
        return 'calc(var(--size-navbar-height) + var(--size-loginbar-height))';
      }

      return 0;
    }}
  );
  transition: transform var(--transition-default);

  &.navbar {
    transform: translateY(var(--size-navbar-height));
  }

  &.loginbar {
    transform: translateY(
      calc(var(--size-navbar-height) + var(--size-loginbar-height))
    );
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(10rem, auto) 1fr minmax(10rem, auto);
  grid-template-areas: 'search logo more';
  grid-template-rows: var(--size-header-height);
  width: 100%;
  max-width: var(--size-container-max-width);
  margin: 0 auto;
`;

const Header = () => {
  const { loginbar, navbar } = useContext(NavigationContext);

  return (
    <Wrapper isLoginbar={loginbar} isNavbar={navbar}>
      <Grid>
        <Logo />
        <SearchbarSwitcher />
        <NavigationSwitcher />
      </Grid>
    </Wrapper>
  );
};

export default Header;
