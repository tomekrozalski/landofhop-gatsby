import styled from 'styled-components';

import { breakpoints } from 'utils/theme';

export default styled.img`
  height: 22rem;
  margin: 4rem 0;
  transform: scale(1);
  transition: transform var(--transition-default);
  fill: var(--color-bright);

  @media (min-width: ${breakpoints.xl}) {
    height: 28rem;
  }
`;
