import React, { useState } from 'react';

import { ContainerType } from 'utils/enums/beverage';
import { TranslatedBeverage as TranslatedBeverageTypes } from 'components/Tiles/utils/types';

const initialSearchResultsData = [{
	id: 'id',
	shortId: 'shortId',
	badge: 'badge',
	name: {
		language: null,
		value: 'name'
	},
	brand: {
		badge: 'brand badge',
		name: {
			language: null,
			value: 'brand name'
		},
	},
	photos: null,
	container: {
		type: ContainerType.bottle
	}
}];

export const SearchContext = React.createContext({
	searchResults: initialSearchResultsData,
	setSearchResults: (val: TranslatedBeverageTypes[]) => val,
});

const Search: React.FC = ({ children }) => {
	const [searchResults, setSearchResults]: [any[], any] = useState([]);

	return (
		<SearchContext.Provider value={{ searchResults, setSearchResults }}>
			{children}
		</SearchContext.Provider>
	);
};

export default Search;
