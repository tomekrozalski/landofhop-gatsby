import React, { useContext, useState } from 'react';
// import { differenceInSeconds, fromUnixTime } from 'date-fns';
// import jwt from 'jsonwebtoken';

import { NavigationContext } from './Navigation';

export const AuthenticationContext = React.createContext({
  authenticationStatus: 'idle',
  logIn: ({ }: { email: string, password: string }) => new Promise(() => { }),
  logOut: () => { },
  setAuthenticationStatus: (value: 'idle' | 'error' | 'success') => { value },
});

const Authentication: React.FC = ({ children }) => {
  const [authenticationStatus, setAuthenticationStatus] = useState('idle');
  const { setLoginbar, setNavbar } = useContext(NavigationContext);

  const logOut = () => {
    if (window.localStorage.getItem('token')) {
      window.localStorage.removeItem('token');
    }

    setNavbar(false);
    setAuthenticationStatus('idle');
  };

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

        console.log('response', response);
        setAuthenticationStatus('success');

        setTimeout(() => {
          console.log('setTimeout')
          setLoginbar(false);
          setNavbar(false);
        }, 2000);

        console.log('success');
        return response;
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
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default Authentication;
