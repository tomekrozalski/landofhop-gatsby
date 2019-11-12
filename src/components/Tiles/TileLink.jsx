import React from 'react';
import { node, number, shape, string } from 'prop-types';
import { Link } from 'gatsby-plugin-intl';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  padding-bottom: ${({ dimension }) =>
    (dimension.height / dimension.width).toFixed(5) * 100}%;
`;

const TileLink = ({ badge, brand, children, cover, shortId }) => {
  console.log('TileLink');

  return (
    <StyledLink dimension={cover} to={`/details/${shortId}/${brand}/${badge}`}>
      {children}
    </StyledLink>
  );
};

TileLink.propTypes = {
  badge: string.isRequired,
  brand: string.isRequired,
  children: node.isRequired,
  cover: shape({
    height: number.isRequired,
    width: number.isRequired,
  }),
  shortId: string.isRequired,
};

// @ToRemove
TileLink.defaultProps = {
  cover: {
    height: 0,
    width: 0,
  },
};

export default TileLink;
