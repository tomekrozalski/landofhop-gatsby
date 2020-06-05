/* eslint-disable no-unused-expressions, @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from 'react';

import { serverCall } from 'utils/helpers';
//import { AuthenticationContext } from 'utils/contexts';
import { Status as StatusEnum } from 'dashboard/utils/enums';
import { InstitutionType } from '.';

export const InstitutionContext = React.createContext({
  getInstitutions: () => {},
  status: StatusEnum.idle,
  values: [] as InstitutionType[],
});

const Institution: React.FC = ({ children }) => {
  // const { token } = useContext(AuthenticationContext);
  const [status, setStatus] = useState(StatusEnum.idle);
  const [values, setValues] = useState<InstitutionType[]>([]);

  const getInstitutions = () => {
    setStatus(StatusEnum.pending);
  };

  useEffect(() => {
    if (status === StatusEnum.pending) {
      serverCall({
        path: 'institution',
      })
        .then((institutions: InstitutionType[]) => {
          setValues(institutions);
          setStatus(StatusEnum.fulfilled);
        })
        .catch(() => {
          setStatus(StatusEnum.rejected);
        });
    }
  }, [status]);

  return (
    <InstitutionContext.Provider
      value={{
        getInstitutions,
        status,
        values,
      }}
    >
      {children}
    </InstitutionContext.Provider>
  );
};

export default Institution;
