import React, { useContext, useState } from 'react';
// import { differenceInSeconds, fromUnixTime } from 'date-fns';
// import jwt from 'jsonwebtoken';

import { NavigationContext } from './Navigation';

export const AuthenticationContext = React.createContext({
  isAuthenticationError: false,
  logIn: ({ }: { email: string, password: string }) => new Promise(() => { }),
  logOut: () => { },
});

const Authentication: React.FC = ({ children }) => {
  const [isAuthenticationError, setAuthenticationError] = useState(false);
  const { setLoginbar, setNavbar } = useContext(NavigationContext);

  const setLogout = () => {
    if (window.localStorage.getItem('token')) {
      window.localStorage.removeItem('token');
    }
  };

  const logOut = () => {
    setLogout();
    setLoginbar(false);
    setNavbar(false);
  };

  const logIn = (formValues: { email: string, password: string }) => {
    return fetch('http://localhost:4000/auth', {
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

        console.log('response', response);

        setLoginbar(false);
        setNavbar(false);

        console.log('success');
        return response;
      })
      .catch(() => {
        setAuthenticationError(true);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticationError,
        logIn,
        logOut
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default Authentication;
