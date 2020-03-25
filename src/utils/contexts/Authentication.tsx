/* eslint-disable no-unused-expressions, @typescript-eslint/no-empty-function */
import React, { useContext, useEffect, useState } from 'react';
import { differenceInSeconds, fromUnixTime } from 'date-fns';
import jwt from 'jsonwebtoken';
import isObject from 'lodash/isObject';

import { AuthenticationStatus } from 'utils/enums';
import { serverCall } from 'utils/helpers';
import { NavigationContext } from './Navigation';

export const AuthenticationContext = React.createContext({
  authenticationStatus: AuthenticationStatus.loading,
  logIn: ({}: { email: string; password: string }) => new Promise(() => {}),
  logOut: () => {},
  setAuthenticationStatus: (val: AuthenticationStatus) => {
    val;
  },
  token: '',
  tokenExpirationDate: new Date(),
});

const Authentication: React.FC = ({ children }) => {
  const [authenticationStatus, setAuthenticationStatus] = useState(
    AuthenticationStatus.loading,
  );
  const [tokenExpirationDate, setTokenExpirationDate] = useState<Date>(
    new Date(),
  );
  const [token, setToken] = useState('');

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
  };

  const checkTokenExpiration = (value: string) => {
    return new Promise((resolve, reject) => {
      const decodedToken = jwt.decode(value, { complete: true });

      if (isObject(decodedToken)) {
        const expirationDate = fromUnixTime(decodedToken.payload.exp);

        if (differenceInSeconds(expirationDate, new Date()) > 10) {
          setToken(value);
          setTokenExpirationDate(expirationDate);
          setAuthenticationStatus(AuthenticationStatus.success);
          resolve();
        }
      }

      reject();
    });
  };

  useEffect(() => {
    const storageToken = window.localStorage.getItem('token');

    if (storageToken) {
      checkTokenExpiration(storageToken).catch(tokenExpired);
    } else {
      setAuthenticationStatus(AuthenticationStatus.idle);
    }
  }, []);

  const logIn = (formValues: { email: string; password: string }) => {
    return serverCall({
      body: JSON.stringify(formValues),
      method: 'POST',
      path: 'auth',
    })
      .then(response => {
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
        token,
        tokenExpirationDate,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default Authentication;
