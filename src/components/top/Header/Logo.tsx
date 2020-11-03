import React from 'react';
import { Link } from 'gatsby-plugin-intl';
import styled from 'styled-components';

import { breakpoints } from 'utils/theme';
import { Hop as HopIcon } from 'elements/icons';

const StyledLink = styled(Link)`
  grid-area: logo;
  display: flex;
  justify-content: center;

  &:hover svg {
    transform: scale(1.1);
  }
`;

const Header = styled.h1`
  display: flex;

  svg {
    fill: var(--color-white);
    width: 4rem;
    transform: scale(1);
    transform-origin: center;
    transition: transform var(--transition-default);

    @media (min-width: ${breakpoints.xl}) {
      width: 6rem;
    }
  }
`;

const Logo: React.FC = () => (
  <StyledLink to="/">
    <Header>
      <HopIcon />
    </Header>
  </StyledLink>
);

export default Logo;
