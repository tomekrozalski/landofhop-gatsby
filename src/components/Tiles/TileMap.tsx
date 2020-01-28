import React from 'react';

import { BeverageBasics as BeverageBasicsTypes } from 'utils/types';
import { translateBeverageBasics } from 'utils/helpers';
import { Tile } from '.';

type Props = {
	edges: { node: BeverageBasicsTypes }[]
}

const TileMap: React.FC<Props> = ({ edges }) => (
	<>
		{edges.map(({ node }) => (
			<Tile key={node.id} {...translateBeverageBasics(node)} />
		))
		}
	</>
);

export default TileMap;
