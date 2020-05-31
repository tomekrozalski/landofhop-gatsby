import { Dispatch } from 'redux';

import { serverCall } from 'utils/helpers';
import actionsName from 'dashboard/utils/store/actionsName';
import { Output as OutputType } from 'dashboard/BeverageData/fields/Place/utils/formatData';

type Props = {
  dispatch: Dispatch<any>;
  token: string;
  values: OutputType;
};

const addNewPlace = ({ dispatch, token, values }: Props) =>
  new Promise((resolve, reject) => {
    dispatch({ type: actionsName.ADD_NEW_PLACE_PENDING });

    serverCall({
      body: JSON.stringify(values),
      method: 'POST',
      path: 'place',
      token,
    })
      .then(() => {
        //dispatch(getAllPlaces());
        console.log('bum');

        dispatch({ type: actionsName.ADD_NEW_PLACE_FULFILLED });
        resolve();
      })
      .catch(() => {
        dispatch({ type: actionsName.ADD_NEW_PLACE_REJECTED });
        reject();
      });
  });

export default addNewPlace;
