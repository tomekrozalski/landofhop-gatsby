import React from 'react';
import styled from 'styled-components';

import { beverageBasicsTypes } from 'utils/types';
import TileLink from './TileLink';
import Image from './Image';

const ListItem = styled.li`
  display: flex;
`;

const Tile = ({ badge, editorial, label, shortId }) => {
  const { cover } = editorial.photos;
  const brandBadge = label.general.brand.badge;

  return (
    <ListItem>
      <TileLink
        badge={badge}
        brand={brandBadge}
        cover={cover}
        shortId={shortId}
      >
        <Image
          badge={badge}
          brand={label.general.brand}
          containerType={label.container.type}
          shortId={shortId}
        />
      </TileLink>
    </ListItem>
  );
};

Tile.propTypes = beverageBasicsTypes;

export default Tile;
