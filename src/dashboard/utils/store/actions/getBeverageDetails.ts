import { Dispatch } from 'redux';
import { serverCall } from 'utils/helpers';
import { FormType } from 'dashboard/utils/enums';
import {
  AppActions as AppActionsType,
  Beverage as BeverageType,
} from '../types';
import actionsName from '../actionsName';

const setBeverageDetailsPending = (): AppActionsType => ({
  type: actionsName.GET_BEVERAGE_DETAILS_PENDING,
});

const setBeverageDetailsFullfilled = ({
  beverageDetails,
  formType,
}: {
  beverageDetails: BeverageType;
  formType: FormType;
}): AppActionsType => ({
  type: actionsName.GET_BEVERAGE_DETAILS_FULFILLED,
  payload: { beverageDetails, formType },
});

const setBeverageDetailsRejected = (): AppActionsType => ({
  type: actionsName.GET_BEVERAGE_DETAILS_REJECTED,
});

const getBeverageDetails = ({
  badge,
  brand,
  formType,
  shortId,
}: {
  badge: string;
  brand: string;
  formType: FormType;
  shortId: string;
}) => (dispatch: Dispatch<AppActionsType>) => {
  dispatch(setBeverageDetailsPending());

  serverCall({
    path: `beverage/${shortId}/${brand}/${badge}`,
  })
    .then(beverageDetails => {
      dispatch(setBeverageDetailsFullfilled({ beverageDetails, formType }));
    })
    .catch(() => {
      dispatch(setBeverageDetailsRejected());
    });
};

export default getBeverageDetails;
