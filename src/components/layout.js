import React from 'react';
import { node } from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import GlobalStateProvider from 'utils/contexts/GlobalStateProvider';
import { Header, LoginBar, NavBar } from './top';

const Main = styled.main`
  margin-top: var(--size-header-height);
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <GlobalStateProvider>
      <NavBar />
      <LoginBar />
      <Header />
      <Main>{children}</Main>
    </GlobalStateProvider>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
