import React, { useState } from 'react';

export const NavigationContext = React.createContext({
  loginbar: false,
  mainLink: '/',
  navbar: false,
  searchbarActive: false,
  setLoginbar: (val: boolean) => { val },
  setMainLink: (val: string) => { val },
  setNavbar: (val: boolean) => { val },
  setSearchbarActive: (val: boolean) => { val },
  toggleLoginbar: () => { },
  toggleNavbar: () => { },
});

const Navigation: React.FC = ({ children }) => {
  const [mainLink, setMainLink] = useState('/');
  const [loginbar, setLoginbar] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [searchbarActive, setSearchbarActive] = useState(false);

  return (
    <NavigationContext.Provider
      value={{
        loginbar,
        mainLink,
        navbar,
        searchbarActive,
        setLoginbar,
        setMainLink,
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
