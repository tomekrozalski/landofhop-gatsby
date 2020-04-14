import { createContext } from 'react';

import { Beverage as BeverageTypes } from 'components/BeverageDetails/utils/types';
import { initialBeverageData } from '../helpers';

// @Info: I could use Partial generic, but it would complicate displaying some components
export default createContext<BeverageTypes>(initialBeverageData);
