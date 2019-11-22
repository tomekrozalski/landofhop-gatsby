import React from 'react';
import styled from 'styled-components';

import { beverageBasicsTypes } from 'utils/types';
import TileLink from './TileLink';
import Image from './Image';

const ListItem = styled.li`
  display: flex;
  padding-top: 2rem;
  position: relative;
`;

const Tile = ({ badge, coverPhoto, label, shortId }) => {
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

Tile.propTypes = beverageBasicsTypes;

export default Tile;
