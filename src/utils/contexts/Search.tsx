import React, { useState } from 'react';

import { ContainerType } from 'components/BeverageDetails/utils/enums';
import { TranslatedBeverage as TranslatedBeverageTypes } from 'components/Tiles/utils/types';

const initialSearchResultsData = [
  {
    id: 'id',
    shortId: 'shortId',
    badge: 'badge',
    name: {
      language: null,
      value: 'name',
    },
    brand: {
      badge: 'brand badge',
      name: {
        language: null,
        value: 'brand name',
      },
    },
    photos: null,
    container: {
      type: ContainerType.bottle,
    },
  },
];

export const SearchContext = React.createContext({
  loading: false,
  nothingFound: false,
  searchResults: initialSearchResultsData,
  setLoading: (val: boolean) => {
    // eslint-disable-next-line no-unused-expressions
    val;
  },
  setNothingFound: (val: boolean) => {
    // eslint-disable-next-line no-unused-expressions
    val;
  },
  setSearchResults: (val: TranslatedBeverageTypes[]) => val,
});

const Search: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [nothingFound, setNothingFound] = useState(false);
  const [searchResults, setSearchResults]: [any[], any] = useState([]);

  return (
    <SearchContext.Provider
      value={{
        loading,
        nothingFound,
        searchResults,
        setLoading,
        setNothingFound,
        setSearchResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default Search;
