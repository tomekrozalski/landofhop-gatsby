/* eslint-disable no-unused-expressions, @typescript-eslint/no-empty-function */
import React, { useState } from 'react';

import { Subform as SubformEnum } from 'dashboard/utils/enums';

type SubformType = SubformEnum | null;

export const NavigationContext = React.createContext({
  setSubform: (value: SubformType) => {
    value;
  },
  subform: null as SubformType,
});

const Navigation: React.FC = ({ children }) => {
  const [subform, setSubform] = useState<SubformType>(null);

  return (
    <NavigationContext.Provider value={{ setSubform, subform }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default Navigation;
