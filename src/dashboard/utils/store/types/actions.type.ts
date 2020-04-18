import { FormType } from '../../enums';
import actionsName from '../actionsName';
import { Beverage as BeverageType, Institution as InstitutionType } from '.';

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

export type AppActions = InstitutionsActions | BeverageDetailsActions;
