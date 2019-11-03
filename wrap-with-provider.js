import React from 'react';
import { node } from 'prop-types';
import { Provider } from 'react-redux';

import createStore from 'utils/store';
import GlobalStateProvider from 'utils/contexts/GlobalStateProvider';

const Wrapper = ({ element }) => {
  const store = createStore();

  return (
    <Provider store={store}>
      <GlobalStateProvider>{element}</GlobalStateProvider>
    </Provider>
  );
};

Wrapper.propTypes = {
  element: node.isRequired,
};

export default Wrapper;
