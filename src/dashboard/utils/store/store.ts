import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import beverageDetails from './reducers/beverageDetails';
import institutions from './reducers/institutions';

const rootReducer = combineReducers({
  beverageDetails,
  institutions,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
