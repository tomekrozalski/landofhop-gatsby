/* eslint
	default-case: 0,
	no-param-reassign: 0,
	no-useless-return: 0,
*/
import produce from 'immer';

import { Institution as InstitutionType } from '../types';
import actionsName from '../actionsName';

type Model = {
  values: InstitutionType[];
  isError: boolean;
  isLoaded: boolean;
  isLoading: boolean;
};

export const initialState = {
  values: [],
  isError: false,
  isLoaded: false,
  isLoading: false,
};

export default (state = initialState as Model, action: any) =>
  produce(state, draft => {
    switch (action.type) {
      case actionsName.GET_INSTITUTIONS_PENDING:
        draft.isLoading = true;
        return;

      case actionsName.GET_INSTITUTIONS_FULFILLED:
        draft.values = action.payload.institutions;
        draft.isError = false;
        draft.isLoaded = true;
        draft.isLoading = false;
        return;

      case actionsName.GET_INSTITUTIONS_REJECTED:
        draft.values = [];
        draft.isError = true;
        draft.isLoaded = false;
        draft.isLoading = false;
        return;
    }
  });
