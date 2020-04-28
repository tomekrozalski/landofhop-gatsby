import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import beverageDetails from './reducers/beverageDetails';
import institutions from './reducers/institutions';
import places from './reducers/places';
import { AppActions } from './types';

const rootReducer = combineReducers({
  beverageDetails,
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
