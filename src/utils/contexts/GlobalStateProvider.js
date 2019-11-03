import React from 'react';
import { node } from 'prop-types';

import { Navigation } from './index';

const ProviderComposer = ({ contexts, children }) =>
  contexts.reduceRight(
    (kids, parent) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children
  );

const GlobalStateProvider = ({ children }) => (
  <ProviderComposer contexts={[<Navigation />]}>{children}</ProviderComposer>
);

GlobalStateProvider.propTypes = {
  children: node.isRequired,
};

export default GlobalStateProvider;
