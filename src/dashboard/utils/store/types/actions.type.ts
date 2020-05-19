import { FormType } from '../../enums';
import actionsName from '../actionsName';
import {
  Beverage as BeverageType,
  Country as CountryType,
  Institution as InstitutionType,
  Place as PlaceType,
} from '.';

// Beverage details

type SetBeverageDetailsPendingAction = {
  type: typeof actionsName.GET_BEVERAGE_DETAILS_PENDING;
};

type SetBeverageDetailsFullfilledAction = {
  type: typeof actionsName.GET_BEVERAGE_DETAILS_FULFILLED;
  payload: {
    beverageDetails: BeverageType;
    formType: FormType;
  };
};

type SetBeverageDetailsRejectedAction = {
  type: typeof actionsName.GET_BEVERAGE_DETAILS_REJECTED;
};

type ResetBeverageDetailsAction = {
  type: typeof actionsName.RESET_BEVERAGE_DETAILS;
};

export type BeverageDetailsActions =
  | SetBeverageDetailsPendingAction
  | SetBeverageDetailsFullfilledAction
  | SetBeverageDetailsRejectedAction
  | ResetBeverageDetailsAction;

// Institutions

type SetInstitutionsPendingAction = {
  type: typeof actionsName.GET_INSTITUTIONS_PENDING;
};

type SetInstitutionsFulfilledAction = {
  type: typeof actionsName.GET_INSTITUTIONS_FULFILLED;
  institutions: InstitutionType[];
};

type SetInstitutionsRejected = {
  type: typeof actionsName.GET_INSTITUTIONS_REJECTED;
};

export type InstitutionsActions =
  | SetInstitutionsPendingAction
  | SetInstitutionsFulfilledAction
  | SetInstitutionsRejected;

// Places

type SetPlacesPendingAction = {
  type: typeof actionsName.GET_PLACES_PENDING;
};

type SetPlacesFulfilledAction = {
  type: typeof actionsName.GET_PLACES_FULFILLED;
  places: PlaceType[];
};

type SetPlacesRejected = {
  type: typeof actionsName.GET_PLACES_REJECTED;
};

export type PlacesActions =
  | SetPlacesPendingAction
  | SetPlacesFulfilledAction
  | SetPlacesRejected;

// Countries

type SetCountriesPendingAction = {
  type: typeof actionsName.GET_COUNTRIES_PENDING;
};

type SetCountriesFulfilledAction = {
  type: typeof actionsName.GET_COUNTRIES_FULFILLED;
  countries: CountryType[];
};

type SetCountriesRejected = {
  type: typeof actionsName.GET_COUNTRIES_REJECTED;
};

export type CountriesActions =
  | SetCountriesPendingAction
  | SetCountriesFulfilledAction
  | SetCountriesRejected;

export type AppActions =
  | BeverageDetailsActions
  | InstitutionsActions
  | PlacesActions
  | CountriesActions;
