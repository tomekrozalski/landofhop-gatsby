/* eslint
	default-case: 0,
	no-param-reassign: 0,
	no-useless-return: 0,
*/
import produce from 'immer';

import actionsName from '../actionsName';

export const initialState = {
  values: [],
  isError: false,
  isLoaded: false,
  isLoading: false,
};

export default (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actionsName.GET_INSTITUTIONS_LIST_PENDING:
        draft.isLoading = true;
        return;

      case actionsName.GET_INSTITUTIONS_LIST_FULFILLED:
        draft.values = action.payload.institutions;
        draft.isError = false;
        draft.isLoaded = true;
        draft.isLoading = false;
        return;

      case actionsName.GET_INSTITUTIONS_LIST_REJECTED:
        draft.values = [];
        draft.isError = true;
        draft.isLoaded = false;
        draft.isLoading = false;
        return;
    }
  });
