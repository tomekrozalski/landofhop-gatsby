/* eslint-disable no-unused-expressions, @typescript-eslint/no-empty-function */
import React, { useState } from 'react';

export const NavigationContext = React.createContext({
  loginbar: false,
  navbar: false,
  searchbarActive: false,
  setLoginbar: (val: boolean) => {
    val;
  },
  setNavbar: (val: boolean) => {
    val;
  },
  setSearchbarActive: (val: boolean) => {
    val;
  },
  toggleLoginbar: () => {},
  toggleNavbar: () => {},
});

const Navigation: React.FC = ({ children }) => {
  const [loginbar, setLoginbar] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [searchbarActive, setSearchbarActive] = useState(false);

  return (
    <NavigationContext.Provider
      value={{
        loginbar,
        navbar,
        searchbarActive,
        setLoginbar,
        setNavbar,
        setSearchbarActive,
        toggleLoginbar: () => {
          setLoginbar(!loginbar);
        },
        toggleNavbar: () => setNavbar(!navbar),
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default Navigation;
