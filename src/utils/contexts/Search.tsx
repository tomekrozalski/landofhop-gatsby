import React, { useState } from 'react';

import { ContainerType } from 'utils/enums/beverage';
import { SearchResult as SearchResultTypes } from 'utils/types'

const initialSearchResultsData = [{
	id: 'id',
	shortId: 'shortId',
	badge: 'badge',
	name: {
		value: 'name'
	},
	brand: {
		badge: 'brand badge',
		name: {
			value: 'brand name'
		},
	},
	containerType: ContainerType.bottle
}];

export const SearchContext = React.createContext({
	searchResults: initialSearchResultsData,
	setSearchResults: (val: SearchResultTypes[]) => { val },
});

const Search: React.FC = ({ children }) => {
	const [searchResults, setSearchResults] = useState(initialSearchResultsData);

	return (
		<SearchContext.Provider value={{ searchResults, setSearchResults }}>
			{children}
		</SearchContext.Provider>
	);
};

export default Search;
