import React from 'react';

import { TranslatedBeverage as TranslatedBeverageTypes } from './utils/types';
import { ListItem } from './elements';
import { Image, TileLink } from '.';

type Props = {
  data: TranslatedBeverageTypes;
  missing?: boolean;
};

const Tile: React.FC<Props> = ({ data, missing = false }) => (
  <ListItem>
    <TileLink data={data} missing={missing}>
      <Image {...data} />
    </TileLink>
  </ListItem>
);

export default Tile;
