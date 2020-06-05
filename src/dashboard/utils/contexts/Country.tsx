/* eslint-disable no-unused-expressions, @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react';

import { serverCall } from 'utils/helpers';
// import { AuthenticationContext } from 'utils/contexts';
import { Status as StatusEnum } from 'dashboard/utils/enums';
import { CountryType } from '.';

export const CountryContext = React.createContext({
  getCountries: () => {},
  status: StatusEnum.idle,
  values: [] as CountryType[],
});

const Country: React.FC = ({ children }) => {
  // const { token } = useContext(AuthenticationContext);
  const [status, setStatus] = useState(StatusEnum.idle);
  const [values, setValues] = useState<CountryType[]>([]);

  const getCountries = () => {
    setStatus(StatusEnum.pending);
  };

  useEffect(() => {
    if (status === StatusEnum.pending) {
      serverCall({
        path: 'country',
      })
        .then((countries: CountryType[]) => {
          setValues(countries);
          setStatus(StatusEnum.fulfilled);
        })
        .catch(() => {
          setStatus(StatusEnum.rejected);
        });
    }
  }, [status]);

  return (
    <CountryContext.Provider
      value={{
        getCountries,
        status,
        values,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default Country;
