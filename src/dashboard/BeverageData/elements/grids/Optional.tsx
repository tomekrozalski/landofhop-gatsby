import styled from 'styled-components';

import commonStyles from './commonStyles';

const Optional = styled.div`
  ${commonStyles}
  grid-template-columns:
    calc(44rem - var(--size-input-height)) var(--size-input-height) 45rem repeat(2, var(--size-input-height))
    1fr;
`;

export default Optional;
