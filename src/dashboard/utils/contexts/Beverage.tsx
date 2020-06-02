/* eslint-disable no-unused-expressions, @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars */
import React, { useContext, useState } from 'react';

import { serverCall } from 'utils/helpers';
import { AuthenticationContext } from 'utils/contexts';
import { Status as StatusEnum } from 'dashboard/utils/enums';

import {
  ContainerColor,
  ContainerMaterial,
  ContainerUnit,
  ContainerType,
} from 'components/BeverageDetails/utils/enums';
import { FormType } from 'dashboard/utils/enums';

export const BeverageContext = React.createContext({
  data: {
    id: '',
    shortId: '',
    badge: '',
    name: [
      {
        language: '',
        value: '',
      },
    ],
    brand: {
      badge: '',
      id: '',
      name: [
        {
          language: '',
          value: '',
        },
      ],
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
  },
  getBeverageDetails: ({}: {
    badge: string;
    brand: string;
    shortId: string;
  }) => {},
  formType: FormType.add,
  status: StatusEnum.idle,
});

const Beverage: React.FC = ({ children }) => {
  // const { token } = useContext(AuthenticationContext);
  const [status, setStatus] = useState(StatusEnum.idle);
  const [formType, setFormType] = useState(FormType.add);
  const [data, setData] = useState([]);

  const getBeverageDetails = ({
    badge,
    brand,
    shortId,
  }: {
    badge: string;
    brand: string;
    shortId: string;
  }) => {
    console.log('2');
    setStatus(StatusEnum.pending);
    setFormType(FormType.update);

    console.log('bum!');

    serverCall({
      path: `beverage/${shortId}/${brand}/${badge}`,
    })
      .then(beverageDetails => {
        console.log('beverageDetails', beverageDetails);
        setData(beverageDetails);
        setStatus(StatusEnum.fulfilled);
      })
      .catch(() => {
        setStatus(StatusEnum.rejected);
      });
  };

  return (
    <BeverageContext.Provider
      value={{
        data,
        getBeverageDetails,
        formType,
        status,
      }}
    >
      {children}
    </BeverageContext.Provider>
  );
};

export default Beverage;
