import React from 'react';
import { node, string } from 'prop-types';
import { Link } from 'gatsby-plugin-intl';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  width: 100%;
  margin-top: 2rem;

  &:hover {
    img {
      transform: scale(0.9);
    }
  }
`;

const TileLink = ({ badge, brand, children, shortId }) => (
  <StyledLink to={`/details/${shortId}/${brand}/${badge}`}>
    {children}
  </StyledLink>
);

TileLink.propTypes = {
  badge: string.isRequired,
  brand: string.isRequired,
  children: node.isRequired,
  shortId: string.isRequired,
};

export default TileLink;
