import styled from 'styled-components';

import { breakpoints } from 'utils/theme';

const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: var(--size-container-max-width);
  margin: 6rem auto;

  @media (min-width: ${breakpoints.xl}) {
    margin: 12rem auto 8rem auto;
  }
`;

export default PaginationList;
