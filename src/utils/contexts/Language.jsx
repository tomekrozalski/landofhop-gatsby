import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { siteLanguages } from '../constants';

export const LanguageContext = React.createContext({
  changeLanguage: () => {},
  language: siteLanguages.pl,
});

const Language = ({ children }) => {
  const [language, setLanguage] = useState(siteLanguages.pl);

  const changeLanguage = languageToChange => {
    window.localStorage.setItem('language', languageToChange);

    setLanguage(languageToChange);
  };

  useEffect(() => {
    const storageLanguage = window.localStorage.getItem('language');

    if (storageLanguage) {
      setLanguage(storageLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ changeLanguage, language }}>
      {children}
    </LanguageContext.Provider>
  );
};

Language.propTypes = {
  children: PropTypes.node,
};

Language.defaultProps = {
  children: null,
};

export default Language;
