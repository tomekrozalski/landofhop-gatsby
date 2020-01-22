import React from 'react';
import styled from 'styled-components';
import algoliasearch from 'algoliasearch/lite';
import { Hits, InstantSearch } from 'react-instantsearch-dom';
import get from 'lodash/get';


import GlobalStateProvider from 'utils/contexts';
import { Header, LoginBar, NavBar } from './top';

const searchClient = algoliasearch('0CJ7IUDPEH', 'b2527a4fcc685e9c5e4daafe5b9e7b98');

const Main = styled.main`
  margin-top: var(--size-header-height);
`;

const Hit = ({ hit }: { hit: { badge: string } }) => {
  console.log('hit', hit);

  return (
    <div>
      <picture>

        <img
          sizes="(max-width: 220px) 100vw, 220px"
          src={get(hit, 'coverPhoto.childImageSharp.fluid.src')}
          alt="Rauchweizen garażowy, Widawa Brewery"
        />
      </picture>

      {hit.badge}
    </div>
  );
};

const Layout: React.FC = ({ children }) => (
  <GlobalStateProvider>
    <InstantSearch searchClient={searchClient} indexName="Land of Hop">
      <NavBar />
      <LoginBar />
      <Header />
      <Main>
        <Hits hitComponent={Hit} />
        {children}
      </Main>
    </InstantSearch>
  </GlobalStateProvider>
);

export default Layout;
