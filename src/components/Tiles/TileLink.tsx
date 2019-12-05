import React from 'react';
import { Link } from 'gatsby-plugin-intl';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  width: 100%;
  min-height: 38rem;

  &:hover {
    img {
      transform: scale(0.9);
    }

    .icon-broken-container {
      transform: scale(0.9) translateX(-50%);
    }
  }
`;

type Props = {
  badge: string
  brand: string
  shortId: string
}

const TileLink: React.FC<Props> = ({ badge, brand, children, shortId }) => (
  <StyledLink to={`/details/${shortId}/${brand}/${badge}`}>
    {children}
  </StyledLink>
);

export default TileLink;
