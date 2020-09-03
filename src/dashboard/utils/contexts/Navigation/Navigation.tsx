/* eslint-disable no-unused-expressions, @typescript-eslint/no-empty-function */
import React, { useContext, useEffect, useState } from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { navigate } from 'gatsby';

import { FormName, Status as StatusEnum } from 'utils/enums';
import { serverCall } from 'utils/helpers';
import { AuthenticationContext } from 'utils/contexts';
import { FormType, Subform as SubformEnum } from 'dashboard/utils/enums';
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
  saveBeverage: (values: FormValuesEditorial) =>
    new Promise(() => {
      values;
    }),
  beverageDataLoadStatus: StatusEnum.idle,
  beverageFormType: FormType.add,
  editorial: initialEditorialValues as FormValuesEditorial,
  getBeverageDetails: ({}: {
    badge: string;
    brand: string;
    shortId: string;
  }) => {},
  label: initialLabelValues as FormValuesLabel,
  link: null,
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
  setBeverageFormType: (value: FormType) => {
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
  const { checkTokenExpiration, token } = useContext(AuthenticationContext);
  const { values: languages } = useContext(LanguageContext);

  // -------------------------------------------------------------------
  // States

  const [editorial, setEditorial] = useState<FormValuesEditorial>(
    initialEditorialValues,
  );
  const [label, setLabel] = useState<FormValuesLabel>(initialLabelValues);
  const [producer, setProducer] = useState<FormValuesProducer>(
    initialProducerValues,
  );
  const [id, setId] = useState<string | null>(null);
  const [subform, setSubform] = useState<SubformType>(null);
  const [part, setPart] = useState<FormName>(FormName.beverageLabel);
  const [beverageDataLoadStatus, setBeverageDataLoadStatus] = useState(
    StatusEnum.idle,
  );
  const [beverageFormType, setBeverageFormType] = useState(FormType.add);
  const [link, setLink] = useState(null);

  // -------------------------------------------------------------------

  const saveLabel = setLabel;
  const saveProducer = setProducer;
  const saveEditorial = setEditorial;

  const preventClose = (e: Event) => {
    e.preventDefault();
    e.returnValue = true;
  };

  useEffect(() => {
    window.addEventListener('beforeunload', preventClose);

    return () => {
      window.removeEventListener('beforeunload', preventClose);
    };
  }, []);

  const saveBeverage = (values: FormValuesEditorial) => {
    const normalizedData = formToData({
      id,
      label,
      producer,
      editorial: values,
    });

    return checkTokenExpiration(token)
      .then(() => {
        return serverCall({
          path: 'beverage',
          method: beverageFormType === FormType.add ? 'POST' : 'PUT',
          body: JSON.stringify(normalizedData),
          token,
        })
          .then(async ({ badge, brand, shortId }) => {
            await window.removeEventListener('beforeunload', preventClose);

            navigate('/pl/update-beverage-images', {
              state: { badge, brand, shortId },
            });
          })
          .catch((e: any) => {
            // eslint-disable-next-line no-console
            console.error('Error:', e);
          });
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        console.warn('Save beverage failed. Token is expired');
      });
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

        setId(beverageDetails.id);
        setLabel(normalizedLabel);
        setProducer(normalizedProducer);
        setEditorial(normalizedEditorial);
        setBeverageDataLoadStatus(StatusEnum.fulfilled);
        setLink(
          `/details/${beverageDetails.shortId}/${beverageDetails.brand.badge}/${beverageDetails.badge}`,
        );
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
        saveBeverage,
        beverageDataLoadStatus,
        beverageFormType,
        editorial,
        getBeverageDetails,
        label,
        link,
        part,
        producer,
        resetBeverageDetails,
        saveEditorial,
        saveLabel,
        saveProducer,
        setBeverageFormType,
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
