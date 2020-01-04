import styled from 'styled-components';

import { breakpoints } from 'utils/theme';

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 160px);
  grid-gap: var(--size-tiles-gap);
  justify-content: center;
  align-items: flex-end;
  max-width: var(--size-container-max-width);
  padding: 2rem var(--size-tiles-gap);
  margin: 0 auto 6rem auto;

  @media (min-width: ${breakpoints.xl}) {
    grid-template-columns: repeat(auto-fill, 220px);
  }
`;

export default Grid;
