import React from 'react';
import styled from 'styled-components';

import GlobalStateProvider from 'utils/contexts';
import { Header, LoginBar, NavBar } from './top';

const Main = styled.main`
  margin-top: var(--size-header-height);
`;

interface Props {
  children: React.ReactNode,
}

const Layout: React.FC<Props> = ({ children }) => (
  <GlobalStateProvider>
    <NavBar />
    <LoginBar />
    <Header />
    <Main>{children}</Main>
  </GlobalStateProvider>
);

export default Layout;
