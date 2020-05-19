/* eslint
	default-case: 0,
	no-param-reassign: 0,
	no-useless-return: 0,
*/
import produce from 'immer';

import { Status as StatusEnum } from 'dashboard/utils/enums';
import {
  Country as CountryType,
  CountriesActions as CountriesActionsType,
} from '../types';
import actionsName from '../actionsName';

type Model = {
  status: StatusEnum;
  values: CountryType[];
};

const initialState: Model = {
  status: StatusEnum.idle,
  values: [],
};

export default (state = initialState, action: CountriesActionsType): Model =>
  produce(state, draft => {
    switch (action.type) {
      case actionsName.GET_COUNTRIES_PENDING:
        draft.status = StatusEnum.pending;
        return;

      case actionsName.GET_COUNTRIES_FULFILLED:
        draft.values = action.countries;
        draft.status = StatusEnum.fulfilled;
        return;

      case actionsName.GET_COUNTRIES_REJECTED:
        draft = initialState;
        draft.status = StatusEnum.rejected;
        return;
    }
  });
