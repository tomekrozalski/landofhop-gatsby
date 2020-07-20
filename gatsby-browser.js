/* eslint-disable import/prefer-default-export, react/jsx-filename-extension */
import React from 'react';
import * as Sentry from '@sentry/browser';

import GlobalStateProvider from './src/utils/contexts';

Sentry.init({ dsn: process.env.SENTRY_DSN });

export const wrapRootElement = ({ element }) => (
  <GlobalStateProvider>{element}</GlobalStateProvider>
);
