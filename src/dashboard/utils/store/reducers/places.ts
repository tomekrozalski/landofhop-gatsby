/* eslint
	default-case: 0,
	no-param-reassign: 0,
	no-useless-return: 0,
*/
import produce from 'immer';

import { Status as StatusEnum } from 'dashboard/utils/enums';
import {
  Place as PlaceType,
  InstitutionsActions as InstitutionsActionsType,
} from '../types';
import actionsName from '../actionsName';

type Model = {
  status: StatusEnum;
  values: PlaceType[];
};

const initialState: Model = {
  status: StatusEnum.idle,
  values: [],
};

export default (state = initialState, action: InstitutionsActionsType): Model =>
  produce(state, draft => {
    switch (action.type) {
      case actionsName.GET_PLACES_PENDING:
        draft.status = StatusEnum.pending;
        return;

      case actionsName.GET_PLACES_FULFILLED:
        draft.values = action.places;
        draft.status = StatusEnum.fulfilled;
        return;

      case actionsName.GET_PLACES_REJECTED:
        draft = initialState;
        draft.status = StatusEnum.rejected;
        return;
    }
  });
