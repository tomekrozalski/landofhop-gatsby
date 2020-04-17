import { serverCall } from 'utils/helpers';
import actionsName from '../actionsName';

const getAllInstitutions = dispatch => {
  dispatch({
    type: actionsName.GET_INSTITUTIONS_LIST_PENDING,
  });

  serverCall({
    path: 'institution',
  })
    .then(institutions => {
      console.log('institutions', institutions);

      dispatch({
        type: actionsName.GET_INSTITUTIONS_LIST_FULFILLED,
        payload: { institutions },
      });
    })
    .catch(err => {
      console.log('err', err);

      dispatch({
        type: actionsName.GET_INSTITUTIONS_LIST_REJECTED,
      });
    });
};

export default getAllInstitutions;
