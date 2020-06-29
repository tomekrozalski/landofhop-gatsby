/* eslint-disable no-unused-expressions, @typescript-eslint/no-empty-function */
import React, { useContext, useState } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import { FormName } from 'utils/enums';
import { serverCall } from 'utils/helpers';
import {
  FormType,
  Subform as SubformEnum,
  Status as StatusEnum,
} from 'dashboard/utils/enums';
import { LanguageContext } from 'dashboard/utils/contexts';
import { FormValues as FormValuesLabel } from 'dashboard/BeverageData/Label/utils';
import { FormValues as FormValuesProducer } from 'dashboard/BeverageData/Producer/utils';
import { FormValues as FormValuesEditorial } from 'dashboard/BeverageData/Editorial/utils';
import {
  label as initialLabelValues,
  producer as initialProducerValues,
} from './initialValues';
import { dataToLabelForm, dataToProducerForm } from './normalize';
import { BeverageType } from './Beverage.type';

type SubformType = SubformEnum | null;
type EditorialType = FormValuesEditorial | null;

export const NavigationContext = React.createContext({
  beverageDataLoadStatus: StatusEnum.idle,
  beverageFormType: FormType.add,
  editorial: null as EditorialType,
  getBeverageDetails: ({}: {
    badge: string;
    brand: string;
    shortId: string;
  }) => {},
  label: initialLabelValues as FormValuesLabel,
  part: FormName.beverageLabel,
  producer: initialProducerValues as FormValuesProducer,
  resetBeverageDetails: () => {},
  saveEditorial: (values: FormValuesEditorial) => {
    values;
  },
  saveLabel: (value: FormValuesLabel) => {
    value;
  },
  saveProducer: (value: FormValuesProducer) => {
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
  const intl = useIntl();
  const { values: languages } = useContext(LanguageContext);

  const [editorial, setEditorial] = useState<EditorialType>(null);
  const [label, setLabel] = useState<FormValuesLabel>(initialLabelValues);
  const [producer, setProducer] = useState<FormValuesProducer>(
    initialProducerValues,
  );
  const [subform, setSubform] = useState<SubformType>(null);
  const [part, setPart] = useState<FormName>(FormName.beverageLabel);

  const [beverageDataLoadStatus, setBeverageDataLoadStatus] = useState(
    StatusEnum.idle,
  );
  const [beverageFormType, setBeverageFormType] = useState(FormType.add);

  const saveLabel = setLabel;
  const saveProducer = setProducer;

  const saveEditorial = (values: FormValuesEditorial) => {
    setEditorial(values);

    console.log('transform data and call to API');
  };

  const getBeverageDetails = ({
    badge,
    brand,
    shortId,
  }: {
    badge: string;
    brand: string;
    shortId: string;
  }) => {
    setBeverageDataLoadStatus(StatusEnum.pending);
    setBeverageFormType(FormType.update);

    serverCall({
      path: `beverage/${shortId}/${brand}/${badge}`,
    })
      .then((beverageDetails: BeverageType) => {
        setLabel(
          dataToLabelForm({
            data: beverageDetails,
            intl,
            languages,
          }),
        );

        setProducer(
          dataToProducerForm({
            data: beverageDetails,
            intl,
            languages,
          }),
        );
        setBeverageDataLoadStatus(StatusEnum.fulfilled);
      })
      .catch(() => {
        setBeverageDataLoadStatus(StatusEnum.rejected);
      });
  };

  const resetBeverageDetails = () => {
    setLabel(initialLabelValues);
    setProducer(initialProducerValues);
    setEditorial(null);
  };

  return (
    <NavigationContext.Provider
      value={{
        beverageDataLoadStatus,
        beverageFormType,
        editorial,
        getBeverageDetails,
        label,
        part,
        producer,
        resetBeverageDetails,
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
