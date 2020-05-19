import { Dispatch } from 'redux';
import { serverCall } from 'utils/helpers';
import { AppActions as AppActionsType, Country as CountryType } from '../types';
import actionsName from '../actionsName';

const setCountriesPending = (): AppActionsType => ({
  type: actionsName.GET_COUNTRIES_PENDING,
});

const setCountriesFulfilled = (countries: CountryType[]): AppActionsType => ({
  type: actionsName.GET_COUNTRIES_FULFILLED,
  countries,
});

const setCountriesRejected = (): AppActionsType => ({
  type: actionsName.GET_COUNTRIES_REJECTED,
});

const getAllCountries = () => (dispatch: Dispatch<AppActionsType>) => {
  dispatch(setCountriesPending());

  serverCall({
    path: 'country',
  })
    .then(countries => {
      dispatch(setCountriesFulfilled(countries));
    })
    .catch(() => {
      dispatch(setCountriesRejected());
    });
};

export default getAllCountries;
