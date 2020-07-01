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
  editorial as initialEditorialValues,
} from './initialValues';
import { dataToForm, formToData } from './normalize';
import { BeverageType } from './Beverage.type';

type SubformType = SubformEnum | null;

export const NavigationContext = React.createContext({
  beverageDataLoadStatus: StatusEnum.idle,
  beverageFormType: FormType.add,
  editorial: initialEditorialValues as FormValuesEditorial,
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

  const [editorial, setEditorial] = useState<FormValuesEditorial>(
    initialEditorialValues,
  );
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

    const normalizedData = formToData({ label, producer, editorial: values });
    console.log('call to API with', normalizedData);
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
        const {
          normalizedLabel,
          normalizedProducer,
          normalizedEditorial,
        } = dataToForm({
          data: beverageDetails,
          intl,
          languages,
        });

        setLabel(normalizedLabel);
        setProducer(normalizedProducer);
        setEditorial(normalizedEditorial);
        setBeverageDataLoadStatus(StatusEnum.fulfilled);
      })
      .catch(() => {
        setBeverageDataLoadStatus(StatusEnum.rejected);
      });
  };

  const resetBeverageDetails = () => {
    setLabel(initialLabelValues);
    setProducer(initialProducerValues);
    setEditorial(initialEditorialValues);
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
