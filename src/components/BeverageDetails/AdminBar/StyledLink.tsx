import styled from 'styled-components';
import { Link } from 'gatsby-plugin-intl';

import { ButtonBasicCSS } from 'elements';

const StyledLink = styled(Link)`
  ${ButtonBasicCSS}
  padding: 0 2rem;
  margin-right: 1rem;
  background-color: var(--color-black);
  color: var(--color-white);

  &:hover {
    background-color: var(--color-success-strong);
  }
`;

export default StyledLink;
