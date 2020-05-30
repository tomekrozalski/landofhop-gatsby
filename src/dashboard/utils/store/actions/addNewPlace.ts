import { Dispatch } from 'redux';

import { serverCall } from 'utils/helpers';
import { Output as ValuesType } from 'dashboard/BeverageData/fields/Place/utils/formatData';
import { AppActions as AppActionsType } from '../types';
import actionsName from '../actionsName';
import getAllPlaces from './getAllPlaces';

const addNewPlacePending = (): AppActionsType => ({
  type: actionsName.ADD_NEW_PLACE_PENDING,
});

const addNewPlaceFulfilled = (): AppActionsType => ({
  type: actionsName.ADD_NEW_PLACE_FULFILLED,
});

const addNewPlaceRejected = (): AppActionsType => ({
  type: actionsName.ADD_NEW_PLACE_REJECTED,
});

type Props = {
  token: string;
  values: ValuesType;
};

const addNewPlace = ({ token, values }: Props) => (
  dispatch: Dispatch<AppActionsType>,
) =>
  new Promise((resolve, reject) => {
    dispatch(addNewPlacePending());

    serverCall({
      body: JSON.stringify(values),
      method: 'POST',
      path: 'place',
      token,
    })
      .then(() => {
        dispatch(getAllPlaces());
        dispatch(addNewPlaceFulfilled());
        resolve();
      })
      .catch(() => {
        dispatch(addNewPlaceRejected());
        reject();
      });
  });

export default addNewPlace;
