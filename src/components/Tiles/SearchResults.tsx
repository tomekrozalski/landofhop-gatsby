import React, { useContext } from 'react';

import { NavigationContext, SearchContext } from 'utils/contexts';

const SearchResults: React.FC = () => {
	const { searchbarActive } = useContext(NavigationContext);
	const { searchResults } = useContext(SearchContext);

	return searchbarActive ? (
		<>
			{searchResults.map(({ id, name }) => <li key={id}>{name.value}</li>)}
		</>
	) : null;
};

export default SearchResults;
