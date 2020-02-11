import React from 'react';

import { TranslatedBeverage as TranslatedBeverageTypes } from './utils/types';
import { ListItem } from './elements';
import { Image, TileLink } from '.';

const Tile: React.FC<TranslatedBeverageTypes> = props => (
  <ListItem>
    <TileLink {...props}>
      <Image {...props} />
    </TileLink>
  </ListItem>
);

export default Tile;
