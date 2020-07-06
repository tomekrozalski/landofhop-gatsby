/* eslint-disable no-unused-expressions, @typescript-eslint/no-empty-function */
import React, { useContext, useEffect, useState } from 'react';

import { serverCall } from 'utils/helpers';
import { AuthenticationContext } from 'utils/contexts';
import { Status as StatusEnum } from 'utils/enums';
import { InstitutionOutput } from 'dashboard/utils/types/form';
import { InstitutionType } from '.';

export const InstitutionContext = React.createContext({
  addNewInstitution: ({}: InstitutionOutput) =>
    new Promise(resolve => resolve()),
  getInstitutions: () => {},
  status: StatusEnum.idle,
  values: [] as InstitutionType[],
});

const Institution: React.FC = ({ children }) => {
  const { token } = useContext(AuthenticationContext);
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

  const addNewInstitution = (request: InstitutionOutput) =>
    new Promise((resolve, reject) => {
      setStatus(StatusEnum.pending);

      serverCall({
        body: JSON.stringify(request),
        method: 'POST',
        path: 'institution',
        token,
      })
        .then((institutions: InstitutionType[]) => {
          setValues(institutions);
          resolve();
        })
        .catch(reject);
    });

  return (
    <InstitutionContext.Provider
      value={{
        addNewInstitution,
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
