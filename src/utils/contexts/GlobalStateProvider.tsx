import React from 'react';

import { Authentication, Navigation, Search } from './index';

type Props = {
  contexts: any;
};

const ProviderComposer: React.FC<Props> = ({ contexts, children }) =>
  contexts.reduceRight(
    (kids: React.ReactNode, parent: any) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children,
  );

const GlobalStateProvider: React.FC = ({ children }) => (
  <ProviderComposer contexts={[<Navigation />, <Authentication />, <Search />]}>
    {children}
  </ProviderComposer>
);

export default GlobalStateProvider;
