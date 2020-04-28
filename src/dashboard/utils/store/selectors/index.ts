import { AppState as AppStateType } from 'dashboard/utils/store';

const selectBeverageDetails = (state: AppStateType) => state.beverageDetails;
const selectRawBeverageDetails = (state: AppStateType) =>
  state.beverageDetails.data;
const selectInstitutions = (state: AppStateType) => state.institutions;
const selectPlaces = (state: AppStateType) => state.places;

export {
  selectBeverageDetails,
  selectRawBeverageDetails,
  selectInstitutions,
  selectPlaces,
};
