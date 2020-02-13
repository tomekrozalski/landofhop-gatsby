import React, { useContext } from 'react';

import { SearchContext } from 'utils/contexts';
import { Grid } from './elements';
import { Tile } from '.';

const SearchResults: React.FC = () => {
	const { searchResults } = useContext(SearchContext);

	return (
		<Grid>
			{searchResults.map(props => <Tile key={props.id} {...props} />)}
		</Grid>
	);
};

export default SearchResults;
