import React, { useContext } from 'react';

import { NavigationContext } from 'utils/contexts';
import { SearchResults } from 'components/Tiles';

const ContentWrapper: React.FC = ({ children }) => {
  const { searchbarActive } = useContext(NavigationContext);

  return <>{searchbarActive ? <SearchResults /> : children}</>;
};

export default ContentWrapper;
