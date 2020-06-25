/* eslint-disable no-unused-expressions, @typescript-eslint/no-empty-function */
import React, { useState } from 'react';

import { FormName } from 'utils/enums';
import { Subform as SubformEnum } from 'dashboard/utils/enums';
import { FormValues as FormValuesLabel } from 'dashboard/BeverageData/Label/utils';
import { FormValues as FormValuesProducer } from 'dashboard/BeverageData/Producer/utils';
import { FormValues as FormValuesEditorial } from 'dashboard/BeverageData/Editorial/utils';

type SubformType = SubformEnum | null;
type LabelType = FormValuesLabel | null;
type ProducerType = FormValuesProducer | null;
type EditorialType = FormValuesEditorial | null;

export const NavigationContext = React.createContext({
  label: null as LabelType,
  part: FormName.beverageLabel,
  saveEditorial: (values: EditorialType) => {
    values;
  },
  saveLabel: (value: LabelType) => {
    value;
  },
  saveProducer: (value: ProducerType) => {
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
  const [editorial, setEditorial] = useState<EditorialType>(null);
  const [label, setLabel] = useState<LabelType>(null);
  const [producer, setProducer] = useState<ProducerType>(null);
  const [subform, setSubform] = useState<SubformType>(null);
  const [part, setPart] = useState<FormName>(FormName.beverageLabel);

  const saveLabel = setLabel;
  const saveProducer = setProducer;

  const saveEditorial = (values: EditorialType) => {
    setEditorial(values);

    console.log('transform data and call to API');
  };

  return (
    <NavigationContext.Provider
      value={{
        label,
        part,
        saveEditorial,
        saveLabel,
        saveProducer,
        setPart,
        setSubform,
        subform,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default Navigation;
