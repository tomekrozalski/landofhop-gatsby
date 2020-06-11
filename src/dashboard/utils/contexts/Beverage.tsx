/* eslint-disable no-unused-expressions, @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

import { serverCall } from 'utils/helpers';
//import { AuthenticationContext } from 'utils/contexts';
import { FormType, Status as StatusEnum } from 'dashboard/utils/enums';
import {
  ContainerColor,
  ContainerMaterial,
  ContainerUnit,
  ContainerType,
} from 'components/BeverageDetails/utils/enums';
import { BeverageType } from '.';

const initialData = {
  id: '',
  shortId: '',
  badge: '',
  name: [{ language: '', value: '' }],
  brand: {
    badge: '',
    id: '',
    name: [{ value: '' }],
    shortId: '',
  },
  container: {
    color: ContainerColor.black,
    material: ContainerMaterial.aluminum,
    unit: ContainerUnit.ml,
    type: ContainerType.bottle,
    value: 10,
  },
  added: new Date(),
};

export const BeverageContext = React.createContext({
  data: initialData,
  getBeverageDetails: ({}: {
    badge: string;
    brand: string;
    shortId: string;
  }) => {},
  formType: FormType.add,
  resetBeverageDetails: () => {},
  status: StatusEnum.idle,
});

const Beverage: React.FC = ({ children }) => {
  // const { token } = useContext(AuthenticationContext);
  const [status, setStatus] = useState(StatusEnum.idle);
  const [formType, setFormType] = useState(FormType.add);
  const [data, setData] = useState<BeverageType>(initialData);

  const getBeverageDetails = ({
    badge,
    brand,
    shortId,
  }: {
    badge: string;
    brand: string;
    shortId: string;
  }) => {
    setStatus(StatusEnum.pending);
    setFormType(FormType.update);

    serverCall({
      path: `beverage/${shortId}/${brand}/${badge}`,
    })
      .then((beverageDetails: BeverageType) => {
        setData(beverageDetails);
        setStatus(StatusEnum.fulfilled);
      })
      .catch(() => {
        setStatus(StatusEnum.rejected);
      });
  };

  const resetBeverageDetails = () => {
    setData(initialData);
  };

  return (
    <BeverageContext.Provider
      value={{
        data,
        getBeverageDetails,
        formType,
        resetBeverageDetails,
        status,
      }}
    >
      {children}
    </BeverageContext.Provider>
  );
};

export default Beverage;
