/* eslint-disable no-unused-expressions, @typescript-eslint/no-empty-function */
import React, { useContext, useState } from 'react';

import { serverCall } from 'utils/helpers';
import { AuthenticationContext } from 'utils/contexts';
import { Status as StatusEnum } from 'dashboard/utils/enums';
import { PlaceOutput } from 'dashboard/utils/types/form';

export const PlaceContext = React.createContext({
  addNewPlace: ({}: PlaceOutput) => new Promise(resolve => resolve()),
  getPlaces: () => {},
  status: StatusEnum.idle,
  values: [],
});

const Place: React.FC = ({ children }) => {
  const { token } = useContext(AuthenticationContext);
  const [status, setStatus] = useState(StatusEnum.idle);
  const [values, setValues] = useState([]);

  const getPlaces = () => {
    setStatus(StatusEnum.pending);

    serverCall({
      path: 'place',
    })
      .then(places => {
        setValues(places);
        setStatus(StatusEnum.idle);
      })
      .catch(() => {
        setStatus(StatusEnum.rejected);
      });
  };

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
          setStatus(StatusEnum.idle);
          resolve();
        })
        .catch(() => {
          setStatus(StatusEnum.rejected);
          reject();
        });
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
