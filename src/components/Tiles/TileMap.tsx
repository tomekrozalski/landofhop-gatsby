import React from 'react';

import { Beverage as BeverageType } from './utils/types';
import { translateBeverage } from './utils/helpers';
import { Tile } from '.';

type Props = {
  edges: { node: BeverageType }[];
};

const TileMap: React.FC<Props> = ({ edges }) => (
  <>
    {edges.map(({ node }) => (
      <Tile key={node.id} data={translateBeverage(node)} />
    ))}
  </>
);

export default TileMap;
