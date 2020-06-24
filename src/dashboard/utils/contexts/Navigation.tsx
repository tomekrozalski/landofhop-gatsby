/* eslint-disable no-unused-expressions, @typescript-eslint/no-empty-function */
import React, { useState } from 'react';

import { FormName } from 'utils/enums';
import { Subform as SubformEnum } from 'dashboard/utils/enums';
import { FormValues as FormValuesLabel } from 'dashboard/BeverageData/Label/utils';

type SubformType = SubformEnum | null;
type LabelType = FormValuesLabel | null;

export const NavigationContext = React.createContext({
  label: null as LabelType,
  part: FormName.beverageLabel,
  setLabel: (value: LabelType) => {
    value;
  },
  setPart: (value: FormName) => {
    value;
  },
  setSubform: (value: SubformType) => {
    value;
  },
  subform: null as SubformType,
});

const Navigation: React.FC = ({ children }) => {
  const [label, setLabel] = useState<LabelType>(null);
  const [subform, setSubform] = useState<SubformType>(null);
  const [part, setPart] = useState<FormName>(FormName.beverageLabel);

  console.log('navigation context label:', part, label);

  return (
    <NavigationContext.Provider
      value={{ label, part, setLabel, setPart, setSubform, subform }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default Navigation;
