import React, { useContext, useEffect, useState } from 'react';
import { differenceInSeconds, fromUnixTime } from 'date-fns';
import jwt from 'jsonwebtoken';
import isObject from 'lodash/isObject';

import { AuthenticationStatus } from 'utils/enums';
import { NavigationContext } from './Navigation';

export const AuthenticationContext = React.createContext({
  authenticationStatus: AuthenticationStatus.loading,
  logIn: ({ }: { email: string, password: string }) => new Promise(() => { }),
  logOut: () => { },
  setAuthenticationStatus: (value: AuthenticationStatus) => { value },
  tokenExpirationDate: new Date()
});

const Authentication: React.FC = ({ children }) => {
  const [authenticationStatus, setAuthenticationStatus] = useState(AuthenticationStatus.loading);
  const [tokenExpirationDate, setTokenExpirationDate] = useState<Date>(new Date());
  const { setLoginbar, setNavbar } = useContext(NavigationContext);

  const logOut = () => {
    if (window.localStorage.getItem('token')) {
      window.localStorage.removeItem('token');
    }

    setLoginbar(false);
    setTokenExpirationDate(new Date());
    setAuthenticationStatus(AuthenticationStatus.idle);
  };

  const tokenExpired = () => {
    setAuthenticationStatus(AuthenticationStatus.expired);
    setLoginbar(true);
    setNavbar(true);

    setTimeout(() => {
      setLoginbar(false);
      setNavbar(false);
      logOut();
    }, 5000);
  }

  const checkTokenExpiration = (value: string) => {
    return new Promise((resolve, reject) => {
      const decodedToken = jwt.decode(value, { complete: true });

      if (isObject(decodedToken)) {
        const expirationDate = fromUnixTime(decodedToken.payload.exp);

        if (differenceInSeconds(expirationDate, new Date()) > 10) {
          setTokenExpirationDate(expirationDate);
          setAuthenticationStatus(AuthenticationStatus.success);
          resolve();
        }
      }

      reject();
    });
  }

  useEffect(() => {
    const storageToken = window.localStorage.getItem('token');

    if (storageToken) {
      checkTokenExpiration(storageToken).catch(tokenExpired);
    } else {
      setAuthenticationStatus(AuthenticationStatus.idle);
    }
  }, []);

  const logIn = (formValues: { email: string, password: string }) => {
    return fetch(`${process.env.API_SERVER}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    })
      .then(response => response.json())
      .then((response) => {
        if (!response.token) {
          throw Error(response.message);
        }

        checkTokenExpiration(response.token)
          .then(() => {
            window.localStorage.setItem('token', response.token);

            setTimeout(() => {
              setLoginbar(false);
              setNavbar(false);
            }, 2000);
          })
          .catch(logOut);
      })
      .catch(() => {
        setAuthenticationStatus(AuthenticationStatus.error);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        authenticationStatus,
        logIn,
        logOut,
        setAuthenticationStatus,
        tokenExpirationDate,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default Authentication;
