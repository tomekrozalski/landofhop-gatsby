/* eslint-disable no-unused-expressions, @typescript-eslint/no-empty-function */
import React, { useContext, useState } from 'react';

import { serverCall } from 'utils/helpers';
import { AuthenticationContext } from 'utils/contexts';
import { Status as StatusEnum } from 'dashboard/utils/enums';

export const CountryContext = React.createContext({
  status: StatusEnum.idle,
  values: [],
});

const Country: React.FC = ({ children }) => {
  // const { token } = useContext(AuthenticationContext);
  const [status, setStatus] = useState(StatusEnum.idle);
  const [values, setValues] = useState([]);

  return (
    <CountryContext.Provider
      value={{
        status,
        values,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default Country;
