/* eslint-disable no-unused-expressions, @typescript-eslint/no-empty-function */
import React, { useContext, useEffect, useState } from 'react';

import { serverCall } from 'utils/helpers';
import { AuthenticationContext } from 'utils/contexts';
import { Status as StatusEnum } from 'utils/enums';
import { PlaceOutput } from 'dashboard/utils/types/form';
import { PlaceType } from '.';

export const PlaceContext = React.createContext({
  addNewPlace: ({}: PlaceOutput) => new Promise(resolve => resolve()),
  getPlaces: () => {},
  status: StatusEnum.idle,
  values: [] as PlaceType[],
});

const Place: React.FC = ({ children }) => {
  const { token } = useContext(AuthenticationContext);
  const [status, setStatus] = useState(StatusEnum.idle);
  const [values, setValues] = useState<PlaceType[]>([]);

  const getPlaces = () => {
    setStatus(StatusEnum.pending);
  };

  useEffect(() => {
    if (status === StatusEnum.pending) {
      serverCall({
        path: 'place',
      })
        .then((places: PlaceType[]) => {
          setValues(places);
          setStatus(StatusEnum.fulfilled);
        })
        .catch(() => {
          setStatus(StatusEnum.rejected);
        });
    }
  }, [status]);

  const addNewPlace = (request: PlaceOutput) =>
    new Promise((resolve, reject) => {
      setStatus(StatusEnum.pending);

      serverCall({
        body: JSON.stringify(request),
        method: 'POST',
        path: 'place',
        token,
      })
        .then(() => {
          getPlaces();
          resolve();
        })
        .catch(reject);
    });

  return (
    <PlaceContext.Provider
      value={{
        addNewPlace,
        getPlaces,
        status,
        values,
      }}
    >
      {children}
    </PlaceContext.Provider>
  );
};

export default Place;
