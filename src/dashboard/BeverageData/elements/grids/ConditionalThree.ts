import styled from 'styled-components';

import commonStyles from './commonStyles';

const ConditionalThree = styled.div`
  ${commonStyles}
  grid-template-columns:
    calc(44rem - var(--size-input-height)) var(--size-input-height) repeat(3, 14.333rem) 1fr;
`;

export default ConditionalThree;
