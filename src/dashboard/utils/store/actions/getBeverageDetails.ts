import { serverCall } from 'utils/helpers';
import { FormType } from 'dashboard/utils/enums';
import actionsName from '../actionsName';

type DispatchType = ({
  type,
  payload,
}: {
  type: string;
  payload?: any;
}) => void;

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
}) => (dispatch: DispatchType) => {
  dispatch({
    type: actionsName.GET_BEVERAGE_DETAILS_PENDING,
  });

  serverCall({
    path: `beverage/${shortId}/${brand}/${badge}`,
  })
    .then(beverageDetails => {
      dispatch({
        type: actionsName.GET_BEVERAGE_DETAILS_FULFILLED,
        payload: { beverageDetails, formType },
      });
    })
    .catch(() => {
      dispatch({
        type: actionsName.GET_BEVERAGE_DETAILS_REJECTED,
      });
    });
};

export default getBeverageDetails;
