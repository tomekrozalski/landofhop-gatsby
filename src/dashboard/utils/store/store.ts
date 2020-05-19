import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import beverageDetails from './reducers/beverageDetails';
import countries from './reducers/countries';
import institutions from './reducers/institutions';
import places from './reducers/places';
import { AppActions } from './types';

const rootReducer = combineReducers({
  beverageDetails,
  countries,
  institutions,
  places,
});

export type AppState = ReturnType<typeof rootReducer>;

// eslint-disable-next-line import/prefer-default-export
export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>),
  ),
);
