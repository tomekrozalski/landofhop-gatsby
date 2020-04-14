import { createContext } from 'react';

import { TranslatedBeverage as TranslatedBeverageTypes } from 'utils/types';
import { initialBeverageData } from 'utils/helpers';

// @Info: I could use Partial generic, but it would complicate displaying some components
export default createContext<TranslatedBeverageTypes>(initialBeverageData);
