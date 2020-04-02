/* eslint-disable import/prefer-default-export, react/jsx-filename-extension */
import React from 'react';

import GlobalStateProvider from './src/utils/contexts';

export const wrapRootElement = ({ element }) => (
  <GlobalStateProvider>{element}</GlobalStateProvider>
);
