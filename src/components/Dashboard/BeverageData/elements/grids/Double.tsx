import styled from 'styled-components';

import commonStyles from './commonStyles';

const Double = styled.div`
  ${commonStyles}
  grid-template-columns:
  45rem repeat(2, 22rem) repeat(2, var(--size-input-height))
    1fr;
  grid-template-rows: var(--size-input-height);
`;

export default Double;
