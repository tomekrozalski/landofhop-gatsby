import { Link } from 'gatsby-plugin-intl';
import styled from 'styled-components';

export default styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: var(--color-white);
  color: var(--color-black);
  transition: color var(--transition-default),
    background-color var(--transition-default);

  &:hover {
    background-color: var(--color-black);
    color: var(--color-white);
  }
`;
