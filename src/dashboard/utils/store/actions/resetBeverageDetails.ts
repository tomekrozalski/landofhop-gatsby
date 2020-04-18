import { AppActions as AppActionsType } from '../types';
import actionsName from '../actionsName';

const resetBeverageDetails = (): AppActionsType => ({
  type: actionsName.RESET_BEVERAGE_DETAILS,
});

export default resetBeverageDetails;
