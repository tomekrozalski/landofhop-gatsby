import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const NavigationContext = React.createContext({
  loginbar: false,
  navbar: false,
  searchbar: false,
  setLoginbar: (val: boolean) => { val },
  setNavbar: (val: boolean) => { val },
  setSearchbar: (val: boolean) => { val },
  toggleLoginbar: () => { },
  toggleNavbar: () => { },
});

const Navigation: React.FC = ({ children }) => {
  const [loginbar, setLoginbar] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [searchbar, setSearchbar] = useState(false);

  return (
    <NavigationContext.Provider
      value={{
        loginbar,
        navbar,
        searchbar,
        setLoginbar,
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

Navigation.propTypes = {
  children: PropTypes.node,
};

Navigation.defaultProps = {
  children: null,
};

export default Navigation;
