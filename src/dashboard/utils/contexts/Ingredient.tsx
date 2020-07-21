/* eslint-disable no-unused-expressions, @typescript-eslint/no-empty-function */
import React, { useContext, useEffect, useState } from 'react';

import { serverCall } from 'utils/helpers';
// import { AuthenticationContext } from 'utils/contexts';
import { Status as StatusEnum } from 'utils/enums';
// import { CountryOutput } from 'dashboard/utils/types/form';
import { IngredientType } from '.';

export const IngredientContext = React.createContext({
  // addNewCountry: ({}: CountryOutput) => new Promise(resolve => resolve()),
  getIngredients: () => {},
  status: StatusEnum.idle,
  values: [] as IngredientType[],
});

const Ingredient: React.FC = ({ children }) => {
  // const { token } = useContext(AuthenticationContext);
  const [status, setStatus] = useState(StatusEnum.idle);
  const [values, setValues] = useState<IngredientType[]>([]);

  const getIngredients = () => {
    setStatus(StatusEnum.pending);
  };

  useEffect(() => {
    if (status === StatusEnum.pending) {
      serverCall({
        path: 'ingredient',
      })
        .then((ingredients: IngredientType[]) => {
          setValues(ingredients);
          setStatus(StatusEnum.fulfilled);
        })
        .catch(() => {
          setStatus(StatusEnum.rejected);
        });
    }
  }, [status]);

  // const addNewCountry = (request: CountryOutput) =>
  //   new Promise((resolve, reject) => {
  //     setStatus(StatusEnum.pending);

  //     serverCall({
  //       body: JSON.stringify(request),
  //       method: 'POST',
  //       path: 'country',
  //       token,
  //     })
  //       .then(() => {
  //         getIngredients();
  //         resolve();
  //       })
  //       .catch(reject);
  //   });

  return (
    <IngredientContext.Provider
      value={{
        getIngredients,
        status,
        values,
      }}
    >
      {children}
    </IngredientContext.Provider>
  );
};

export default Ingredient;
