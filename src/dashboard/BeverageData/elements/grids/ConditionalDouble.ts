import styled from 'styled-components';

import commonStyles from './commonStyles';

const ConditionalDouble = styled.div`
  ${commonStyles}
  grid-template-columns:
    calc(44rem - var(--size-input-height)) var(--size-input-height) repeat(2, 22rem) 1fr;
`;

export default ConditionalDouble;
