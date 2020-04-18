import { Dispatch } from 'redux';
import { serverCall } from 'utils/helpers';
import {
  Institution as InstitutionType,
  AppActions as AppActionsType,
} from '../types';
import actionsName from '../actionsName';

const setInstitutionsPending = (): AppActionsType => ({
  type: actionsName.GET_INSTITUTIONS_PENDING,
});

const setInstitutionsFulfilled = (
  institutions: InstitutionType[],
): AppActionsType => ({
  type: actionsName.GET_INSTITUTIONS_FULFILLED,
  institutions,
});

const setInstitutionsRejected = (): AppActionsType => ({
  type: actionsName.GET_INSTITUTIONS_REJECTED,
});

const getAllInstitutions = () => (dispatch: Dispatch<AppActionsType>) => {
  dispatch(setInstitutionsPending());

  serverCall({
    path: 'institution',
  })
    .then(institutions => {
      dispatch(setInstitutionsFulfilled(institutions));
    })
    .catch(() => {
      dispatch(setInstitutionsRejected());
    });
};

export default getAllInstitutions;
