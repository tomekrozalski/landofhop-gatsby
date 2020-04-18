/* eslint
	default-case: 0,
	no-param-reassign: 0,
	no-useless-return: 0,
*/
import produce from 'immer';

import {
  Institution as InstitutionType,
  InstitutionsActions as InstitutionsActionsType,
} from '../types';
import actionsName from '../actionsName';

type Model = {
  isError: boolean;
  isLoaded: boolean;
  isLoading: boolean;
  values: InstitutionType[];
};

const initialState: Model = {
  isError: false,
  isLoaded: false,
  isLoading: false,
  values: [],
};

export default (state = initialState, action: InstitutionsActionsType): Model =>
  produce(state, draft => {
    switch (action.type) {
      case actionsName.GET_INSTITUTIONS_PENDING:
        draft.isLoading = true;
        return;

      case actionsName.GET_INSTITUTIONS_FULFILLED:
        draft.values = action.institutions;
        draft.isError = false;
        draft.isLoaded = true;
        draft.isLoading = false;
        return;

      case actionsName.GET_INSTITUTIONS_REJECTED:
        draft = initialState;
        draft.isError = true;
        return;
    }
  });
