import React from 'react';
import styled from 'styled-components';

import { ContentWrapper } from 'elements';
import { Header, LoginBar, NavBar } from './top';

const Main = styled.main`
  margin-top: var(--size-header-height);
`;

const Layout: React.FC = ({ children }) => (
  <>
    <NavBar />
    <LoginBar />
    <Header />
    <Main>
      <ContentWrapper>{children}</ContentWrapper>
    </Main>
  </>
);
export default Layout;
