import React, { useCallback, useContext, useEffect, useState } from 'react';
import {
  differenceInSeconds,
  formatDistanceStrict,
  fromUnixTime,
} from 'date-fns';
import jwt from 'jsonwebtoken';

import pl from 'date-fns/locale/pl';
import { NavigationContext } from './Navigation';
import { NotificationContext } from './Notification';

export const AuthenticationContext = React.createContext({
  isLoggedIn: false,
  logIn: ({ }) => new Promise(() => { }),
  logOut: () => { },
  token: '',
  tokenExpiration: ''
});

const Authentication: React.FC = ({ children }) => {
  const { notify } = useContext(NotificationContext);
  const { setLoginbar, setNavbar } = useContext(NavigationContext);

  const [tokenExpiration, setTokenExpiration] = useState<string>(null);
  const [token, setToken] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const setLogout = () => {
    if (window.localStorage.getItem('token')) {
      window.localStorage.removeItem('token');
    }

    setToken(null);
    setTokenExpiration(null);
    setLoggedIn(false);
  };

  const logOut = () => {
    setLogout();
    setLoginbar(false);
    setNavbar(false);

    notify({
      id: 'successfullyLoggedOut',
      type: 'success',
    });
  };

  const checkTimeToLogout = useCallback(() => {
    const secondsToExpiration = differenceInSeconds(
      new Date(tokenExpiration),
      new Date()
    );

    if (secondsToExpiration < 5) {
      setLogout();
      setNavbar(true);
      setLoginbar(true);

      notify({
        id: 'successfullyLoggedOut',
        type: 'success',
      });

      return false;
    }

    if (secondsToExpiration < 15 * 60) {
      notify({
        id: 'tokenExpiresIn',
        type: 'info',
        values: {
          diff: formatDistanceStrict(new Date(tokenExpiration), new Date(), {
            addSuffix: true,
            locale: pl,
          }),
        },
      });
    }

    let delay;

    if (secondsToExpiration < 10) {
      delay = 3000;
    } else if (secondsToExpiration < 60) {
      delay = 10 * 1000;
    } else if (secondsToExpiration < 5 * 60) {
      delay = 60 * 1000;
    } else if (secondsToExpiration < 15 * 60) {
      delay = 5 * 60 * 1000;
    } else {
      delay = 15 * 60 * 1000;
    }

    return setTimeout(checkTimeToLogout, delay);
  });

  useEffect(() => {
    let timeout;

    if (tokenExpiration) {
      const secondsToExpiration = differenceInSeconds(
        new Date(tokenExpiration),
        new Date()
      );

      timeout = setTimeout(
        checkTimeToLogout,
        secondsToExpiration > 5 * 60 ? 60 * 1000 : 10000
      );

      if (!timeout) {
        clearTimeout(timeout);
      }
    } else {
      clearTimeout(timeout);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [checkTimeToLogout, tokenExpiration]);

  const checkTokenExpiration = useCallback((value, type) => {
    const decodedToken = jwt.decode(value, { complete: true });

    if (decodedToken) {
      const expirationDate = fromUnixTime(decodedToken.payload.exp);

      if (differenceInSeconds(expirationDate, new Date()) > 10) {
        notify({
          id: type === 'init' ? 'tokenExpiresIn' : 'loggedIn',
          type: 'success',
          values: {
            diff: formatDistanceStrict(new Date(expirationDate), new Date(), {
              addSuffix: true,
              locale: pl,
            }),
          },
        });

        setToken(value);
        setTokenExpiration(expirationDate);
        setLoggedIn(true);
        setLoginbar(false);

        window.localStorage.setItem('token', value);
        return true;
      }

      notify({
        id: 'tokenExpired',
        type: 'warning',
        values: {
          diff: formatDistanceStrict(new Date(expirationDate), new Date(), {
            addSuffix: true,
            locale: pl,
          }),
        },
      });

      setLogout();
      setNavbar(true);
      setLoginbar(true);

      return false;
    }

    setLogout();
    setNavbar(true);
    setLoginbar(true);

    notify({
      id: 'invalidToken',
      type: 'warning',
    });

    return false;
  });

  const logIn = async (formValues: {}) => {
    const rawResponse = await fetch('http://localhost:3100/api/v2/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    });

    if (rawResponse.status === 200) {
      const response = await rawResponse.json();
      checkTokenExpiration(response.token, 'login');
    } else {
      setLogout();
      notify({
        id: 'wrongLoginAttempt',
        type: 'warning',
      });
    }

    return rawResponse.status;
  };

  useEffect(() => {
    const storageToken = window.localStorage.getItem('token');

    if (storageToken) {
      checkTokenExpiration(storageToken, 'init');
    }
  }, [checkTokenExpiration]);

  return (
    <AuthenticationContext.Provider
      value={{
        isLoggedIn,
        logIn,
        logOut,
        token,
        tokenExpiration,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default Authentication;
