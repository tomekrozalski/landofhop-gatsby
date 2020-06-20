import styled from 'styled-components';

import commonStyles from './commonStyles';

const Five = styled.div`
  ${commonStyles}
  grid-template-columns: 45rem repeat(5, 1fr);
`;

export default Five;
