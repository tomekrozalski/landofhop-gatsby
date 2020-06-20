import styled from 'styled-components';

import commonStyles from './commonStyles';

const Basic = styled.div`
  ${commonStyles}
  grid-template-columns:
    repeat(2, 45rem) repeat(2, var(--size-input-height))
    1fr;
`;

export default Basic;
