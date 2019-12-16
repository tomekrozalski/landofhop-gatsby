import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { BeverageBasics } from 'utils/types';
import TileLink from './TileLink';
import Image from './Image';

const ListItem = styled.li`
  display: flex;
  padding-top: 2rem;
  position: relative;
`;

const Tile: React.FC<BeverageBasics> = ({ badge, coverPhoto, label, shortId }) => {
  const brandBadge = label.general.brand.badge;

  return (
    <ListItem>
      <TileLink badge={badge} brand={brandBadge} shortId={shortId}>
        <Image
          brand={label.general.brand}
          coverPhoto={coverPhoto}
          name={label.general.name}
        />
      </TileLink>
    </ListItem>
  );
};

export default Tile;
