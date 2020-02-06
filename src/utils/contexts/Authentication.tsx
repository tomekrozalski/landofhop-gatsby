import React, { useContext, useEffect, useState } from 'react';
import { differenceInSeconds, fromUnixTime } from 'date-fns';
import jwt from 'jsonwebtoken';
import isObject from 'lodash/isObject';

import { NavigationContext } from './Navigation';

export const AuthenticationContext = React.createContext({
  authenticationStatus: 'idle',
  logIn: ({ }: { email: string, password: string }) => new Promise(() => { }),
  logOut: () => { },
  setAuthenticationStatus: (value: 'idle' | 'error' | 'success' | 'expired') => { value },
  tokenExpirationDate: new Date()
});

const Authentication: React.FC = ({ children }) => {
  const [authenticationStatus, setAuthenticationStatus] = useState('idle');
  const [tokenExpirationDate, setTokenExpirationDate] = useState<Date>(new Date());
  const { setLoginbar, setNavbar } = useContext(NavigationContext);

  const logOut = () => {
    if (window.localStorage.getItem('token')) {
      window.localStorage.removeItem('token');
    }

    setLoginbar(false);
    setTokenExpirationDate(new Date());
    setAuthenticationStatus('idle');
  };

  const tokenExpired = () => {
    setAuthenticationStatus('expired');
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
          setAuthenticationStatus('success');
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
        setAuthenticationStatus('error');
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
