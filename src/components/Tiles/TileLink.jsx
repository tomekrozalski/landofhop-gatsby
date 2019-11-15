import React from 'react';
import { node, number, shape, string } from 'prop-types';
import { Link } from 'gatsby-plugin-intl';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  width: 100%;
  margin-top: 2rem;
  padding-bottom: ${({ height, width }) => (height / width).toFixed(5) * 100}%;
  position: relative;

  &:hover {
    img {
      transform: scale(0.9);
    }
  }
`;

const TileLink = ({
  badge,
  brand,
  children,
  cover: { height, width },
  shortId,
}) => (
  <StyledLink
    height={height}
    to={`/details/${shortId}/${brand}/${badge}`}
    width={width}
  >
    {children}
  </StyledLink>
);

TileLink.propTypes = {
  badge: string.isRequired,
  brand: string.isRequired,
  children: node.isRequired,
  cover: shape({
    height: number.isRequired,
    width: number.isRequired,
  }).isRequired,
  shortId: string.isRequired,
};

export default TileLink;
