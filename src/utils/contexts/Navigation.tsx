import React, { useState } from 'react';

export const NavigationContext = React.createContext({
  loginbar: false,
  mainLink: '/',
  navbar: false,
  searchbar: false,
  setLoginbar: (val: boolean) => { val },
  setMainLink: (val: string) => { val },
  setNavbar: (val: boolean) => { val },
  setSearchbar: (val: boolean) => { val },
  toggleLoginbar: () => { },
  toggleNavbar: () => { },
});

const Navigation: React.FC = ({ children }) => {
  const [mainLink, setMainLink] = useState('/');
  const [loginbar, setLoginbar] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [searchbar, setSearchbar] = useState(false);

  return (
    <NavigationContext.Provider
      value={{
        loginbar,
        mainLink,
        navbar,
        searchbar,
        setLoginbar,
        setMainLink,
        setNavbar,
        setSearchbar,
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

Navigation.defaultProps = {
  children: null,
};

export default Navigation;
