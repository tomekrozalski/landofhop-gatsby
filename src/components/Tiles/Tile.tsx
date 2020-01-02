import React from 'react';
import styled from 'styled-components';

import { Beverage as BeverageTypes } from 'utils/types';
import TileLink from './TileLink';
import Image from './Image';

const ListItem = styled.li`
  display: flex;
  padding-top: 2rem;
  position: relative;
`;

const Tile: React.FC<BeverageTypes> = ({ badge, brand, coverPhoto, name, shortId }) => {

  return (
    <ListItem>
      <TileLink badge={badge} brand={brand.badge} shortId={shortId}>
        <Image
          brand={brand}
          coverPhoto={coverPhoto}
          name={name}
        />
      </TileLink>
    </ListItem>
  );
};

export default Tile;
