/* eslint
	default-case: 0,
	no-param-reassign: 0,
	no-useless-return: 0,
*/
import produce from 'immer';

import {
  ContainerColor,
  ContainerMaterial,
  ContainerUnit,
  ContainerType,
} from 'components/BeverageDetails/utils/enums';
import { FormType, Status as StatusEnum } from 'dashboard/utils/enums';
import {
  Beverage as BeverageType,
  BeverageDetailsActions as BeverageDetailsActionsType,
} from '../types';
import actionsName from '../actionsName';

type Model = {
  data: BeverageType;
  formType: FormType;
  status: StatusEnum;
};

const initialData = {
  id: '',
  shortId: '',
  badge: '',
  name: [
    {
      language: '',
      value: '',
    },
  ],
  brand: {
    badge: '',
    id: '',
    name: [
      {
        language: '',
        value: '',
      },
    ],
    shortId: '',
  },
  container: {
    color: ContainerColor.black,
    material: ContainerMaterial.aluminum,
    unit: ContainerUnit.ml,
    type: ContainerType.bottle,
    value: 10,
  },
  added: new Date(),
};

const initialState: Model = {
  data: initialData,
  formType: FormType.add,
  status: StatusEnum.idle,
};

export default (
  state = initialState,
  action: BeverageDetailsActionsType,
): Model =>
  produce(state, draft => {
    switch (action.type) {
      case actionsName.GET_BEVERAGE_DETAILS_PENDING:
        draft.status = StatusEnum.pending;
        return;

      case actionsName.GET_BEVERAGE_DETAILS_FULFILLED:
        draft.data = action.payload.beverageDetails;
        draft.formType = action.payload.formType;
        draft.status = StatusEnum.fulfilled;

        return;

      case actionsName.GET_BEVERAGE_DETAILS_REJECTED:
        draft.data = initialData;
        draft.formType = FormType.add;
        draft.status = StatusEnum.rejected;
        return;

      case actionsName.RESET_BEVERAGE_DETAILS:
        // eslint-disable-next-line consistent-return
        return initialState;
    }
  });
