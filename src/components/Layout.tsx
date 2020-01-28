import React from 'react';
import styled from 'styled-components';

import GlobalStateProvider from 'utils/contexts';
import { ContentWrapper } from 'elements';
import { Header, LoginBar, NavBar } from './top';

const Main = styled.main`
  margin-top: var(--size-header-height);
`;

const Layout: React.FC = ({ children }) => (
  <GlobalStateProvider>
    <NavBar />
    <LoginBar />
    <Header />
    <Main>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Main>
  </GlobalStateProvider>
);
export default Layout;
