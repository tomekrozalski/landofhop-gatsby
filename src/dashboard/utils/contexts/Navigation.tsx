/* eslint-disable no-unused-expressions, @typescript-eslint/no-empty-function */
import React, { useState } from 'react';

import { Subform as SubformEnum } from 'dashboard/utils/enums';
import { FormValues as FormValuesLabel } from 'dashboard/BeverageData/Label/utils';

type SubformType = SubformEnum | null;
type LabelType = FormValuesLabel | null;

export const NavigationContext = React.createContext({
  label: null as LabelType,
  setLabel: (value: LabelType) => {
    value;
  },
  setSubform: (value: SubformType) => {
    value;
  },
  subform: null as SubformType,
});

const Navigation: React.FC = ({ children }) => {
  const [subform, setSubform] = useState<SubformType>(null);
  const [label, setLabel] = useState<LabelType>(null);

  console.log('navigation context label:', label);

  return (
    <NavigationContext.Provider
      value={{ label, setLabel, setSubform, subform }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default Navigation;
