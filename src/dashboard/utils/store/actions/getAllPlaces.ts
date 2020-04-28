import { Dispatch } from 'redux';
import { serverCall } from 'utils/helpers';
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

const getAllPlaces = () => (dispatch: Dispatch<AppActionsType>) => {
  dispatch(setPlacesPending());

  serverCall({
    path: 'place',
  })
    .then(places => {
      dispatch(setPlacesFulfilled(places));
    })
    .catch(() => {
      dispatch(setPlacesRejected());
    });
};

export default getAllPlaces;
