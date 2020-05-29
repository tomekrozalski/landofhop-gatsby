import { Dispatch } from 'redux';

import { serverCall } from 'utils/helpers';
import { Output as ValuesType } from 'dashboard/BeverageData/fields/Place/utils/formatData';
import { AppActions as AppActionsType, Place as PlaceType } from '../types';
import actionsName from '../actionsName';

const setPlacesPending = (): AppActionsType => ({
  type: actionsName.GET_PLACES_PENDING,
});

const setPlacesFulfilled = (places: PlaceType[]): AppActionsType => ({
  type: actionsName.GET_PLACES_FULFILLED,
  places,
});

const setPlacesRejected = (): AppActionsType => ({
  type: actionsName.GET_PLACES_REJECTED,
});

const addNewPlace = (values: ValuesType) => (
  dispatch: Dispatch<AppActionsType>,
) => {
  dispatch(setPlacesPending());

  serverCall({
    body: JSON.stringify(values),
    method: 'POST',
    path: 'place',
  })
    .then(result => {
      console.log('result', result);
      //dispatch(setPlacesFulfilled(places));
    })
    .catch(() => {
      //dispatch(setPlacesRejected());
    });
};

export default addNewPlace;
