import React, { useContext } from 'react';

import { BeverageBasics as BeverageBasicsTypes } from 'utils/types';
import { NavigationContext } from 'utils/contexts';
import { translateBeverageBasics } from 'utils/helpers';
import { Tile } from '.';

type Props = {
	edges: { node: BeverageBasicsTypes }[]
}

const TileMap: React.FC<Props> = ({ edges }) => {
	const { searchbarActive } = useContext(NavigationContext);

	return searchbarActive ? null : (
		<>
			{edges.map(({ node }) => (
				<Tile key={node.id} {...translateBeverageBasics(node)} />
			))
			}
		</>
	);
}

export default TileMap;
