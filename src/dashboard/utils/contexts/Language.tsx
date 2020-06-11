/* eslint-disable no-unused-expressions, @typescript-eslint/no-empty-function */
import React, { useContext, useEffect, useState } from 'react';

import { serverCall } from 'utils/helpers';
import { AuthenticationContext } from 'utils/contexts';
import { Status as StatusEnum } from 'dashboard/utils/enums';
import { LanguageOutput } from 'dashboard/utils/types/form';
import { LanguageType } from '.';

export const LanguageContext = React.createContext({
  addNewLanguage: ({}: LanguageOutput) => new Promise(resolve => resolve()),
  getLanguages: () => {},
  status: StatusEnum.idle,
  values: [] as LanguageType[],
});

const Language: React.FC = ({ children }) => {
  const { token } = useContext(AuthenticationContext);
  const [status, setStatus] = useState(StatusEnum.idle);
  const [values, setValues] = useState<LanguageType[]>([]);

  const getLanguages = () => {
    setStatus(StatusEnum.pending);
  };

  useEffect(() => {
    if (status === StatusEnum.pending) {
      serverCall({
        path: 'language',
      })
        .then((languages: LanguageType[]) => {
          setValues(languages);
          setStatus(StatusEnum.fulfilled);
        })
        .catch(() => {
          setStatus(StatusEnum.rejected);
        });
    }
  }, [status]);

  const addNewLanguage = (request: LanguageOutput) =>
    new Promise((resolve, reject) => {
      setStatus(StatusEnum.pending);

      serverCall({
        body: JSON.stringify(request),
        method: 'POST',
        path: 'language',
        token,
      })
        .then(() => {
          getLanguages();
          resolve();
        })
        .catch(reject);
    });

  return (
    <LanguageContext.Provider
      value={{
        addNewLanguage,
        getLanguages,
        status,
        values,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default Language;
