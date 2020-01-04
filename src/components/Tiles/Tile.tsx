import React from 'react';

import { BeverageBasicsTranslated as BeverageBasicsTranslatedTypes } from 'utils/types';
import { ListItem } from './elements';
import { Image, TileLink } from '.';

const Tile: React.FC<BeverageBasicsTranslatedTypes> = props => (
  <ListItem>
    <TileLink {...props}>
      <Image {...props} />
    </TileLink>
  </ListItem>
);

export default Tile;
