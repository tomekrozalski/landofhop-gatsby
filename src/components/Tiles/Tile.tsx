import React from 'react';

import { TranslatedBeverage as TranslatedBeverageTypes } from './utils/types';
import { ListItem } from './elements';
import { Image, TileLink } from '.';

type Props = {
  data: TranslatedBeverageTypes;
};

const Tile: React.FC<Props> = ({ data }) => (
  <ListItem>
    <TileLink data={data}>
      <Image {...data} />
    </TileLink>
  </ListItem>
);

export default Tile;
