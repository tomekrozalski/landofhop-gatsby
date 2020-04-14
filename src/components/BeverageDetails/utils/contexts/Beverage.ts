import { createContext } from 'react';

import { TranslatedBeverage as TranslatedBeverageTypes } from '../types';
import { initialBeverageData } from '../helpers';

// @Info: I could use Partial generic, but it would complicate displaying some components
export default createContext<TranslatedBeverageTypes>(initialBeverageData);
