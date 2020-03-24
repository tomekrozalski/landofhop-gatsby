import React from 'react';

import { Beverage as BeverageTypes } from './utils/types';
import { translateBeverage } from './utils/helpers';
import { Tile } from '.';

type Props = {
  edges: { node: BeverageTypes }[];
};

const TileMap: React.FC<Props> = ({ edges }) => (
  <>
    {edges.map(({ node }) => (
      <Tile key={node.id} {...translateBeverage(node)} />
    ))}
  </>
);

export default TileMap;
