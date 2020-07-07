import { Link } from 'gatsby-plugin-intl';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  width: 100%;
  text-align: center;

  > div {
    transform: scale(1);
    transition: transform var(--transition-default);
  }

  &:hover > div {
    transform: scale(0.9);
  }
`;

export default StyledLink;
