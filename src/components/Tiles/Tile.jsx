import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';

import { beverageBasicsTypes } from 'utils/types';
import TileLink from './TileLink';
import Image from './Image';

const ListItem = styled.li`
  display: flex;
`;

const Tile = props => {
  const { badge, label, shortId } = props;
  const cover = get(props, 'editorial.photos.cover', {
    height: 220,
    width: 220,
  });
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
          name={label.general.name}
          shortId={shortId}
        />
      </TileLink>
    </ListItem>
  );
};

Tile.propTypes = beverageBasicsTypes;

export default Tile;
