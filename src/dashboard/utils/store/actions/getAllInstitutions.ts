import { serverCall } from 'utils/helpers';
import actionsName from '../actionsName';

type DispatchType = ({
  type,
  payload,
}: {
  type: string;
  payload?: any;
}) => void;

const getAllInstitutions = () => (dispatch: DispatchType) => {
  dispatch({
    type: actionsName.GET_INSTITUTIONS_PENDING,
  });

  serverCall({
    path: 'institution',
  })
    .then(institutions => {
      dispatch({
        type: actionsName.GET_INSTITUTIONS_FULFILLED,
        payload: { institutions },
      });
    })
    .catch(() => {
      dispatch({
        type: actionsName.GET_INSTITUTIONS_REJECTED,
      });
    });
};

export default getAllInstitutions;
