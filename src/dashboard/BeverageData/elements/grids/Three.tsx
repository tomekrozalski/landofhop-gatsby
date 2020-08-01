import styled from 'styled-components';

import commonStyles from './commonStyles';

const Three = styled.div`
  ${commonStyles}
  grid-template-columns: 45rem repeat(3, 14.33rem) repeat(2, var(--size-input-height));
`;

export default Three;
