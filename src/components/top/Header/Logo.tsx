import React, { useContext } from 'react';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import styled from 'styled-components';

import { NavigationContext } from 'utils/contexts';
import { breakpoints } from 'utils/theme';

const StyledLink = styled(Link)`
  grid-area: logo;
  display: flex;
  justify-content: center;

  &:hover h1 {
    transform: scaleX(1.2);
  }
`;

const Header = styled.h1`
  width: 2rem;
  height: 100%;
  overflow: hidden;
  position: relative;
  transform: scaleX(1);
  transition: transform var(--transition-default);

  @media (min-width: ${breakpoints.md}) {
    width: 4rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    width: 5rem;
  }

  &::before {
    content: '';
    background: var(--color-white);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const Logo: React.FC = () => {
  const { mainLink } = useContext(NavigationContext);

  return (
    <StyledLink to={mainLink}>
      <Header>
        <FormattedMessage id="header.name" />
      </Header>
    </StyledLink>
  );
}

export default Logo;
