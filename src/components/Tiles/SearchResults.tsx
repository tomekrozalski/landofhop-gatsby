import React, { useContext } from 'react';

import { SearchContext } from 'utils/contexts';
import { Grid } from './elements';

const SearchResults: React.FC = () => {
	const { searchResults } = useContext(SearchContext);

	return (
		<Grid>
			{searchResults.map(({ id, name }) => <li key={id}>{name.value}</li>)}
		</Grid>
	);
};

export default SearchResults;
