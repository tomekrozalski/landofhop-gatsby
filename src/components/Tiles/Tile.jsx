import React from 'react';
import get from 'lodash/get';

import { beverageBasicsTypes } from 'utils/types';
import TileLink from './TileLink';
import Image from './Image';

const Tile = ({ badge, editorial, label, shortId }) => {
  // @ToDo: I should not use lodash here
  const cover = get(editorial, 'photos.cover');
  const brandBadge = label.general.brand.badge;

  return (
    <li>
      <TileLink
        badge={badge}
        brand={brandBadge}
        cover={cover}
        shortId={shortId}
      >
        <Image />
      </TileLink>
    </li>
  );
};

Tile.propTypes = beverageBasicsTypes;

export default Tile;
