import React from 'react';

import { Country, Institution, Place } from './index';

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

const DashboardStateProvider: React.FC = ({ children }) => (
  <ProviderComposer contexts={[<Place />, <Country />, <Institution />]}>
    {children}
  </ProviderComposer>
);

export default DashboardStateProvider;
