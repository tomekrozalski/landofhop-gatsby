import styled from 'styled-components';

import commonStyles from './commonStyles';

const ConditionalFour = styled.div`
  ${commonStyles}
  grid-template-columns:
    calc(44rem - var(--size-input-height)) var(--size-input-height) repeat(4, 10.5rem) 1fr;
`;

export default ConditionalFour;
