import styled from 'styled-components';

import commonStyles from './commonStyles';

const TextArea = styled.div`
  ${commonStyles}
  grid-template-columns:
    repeat(2, 45rem) repeat(2, var(--size-input-height))
    1fr;
  grid-template-rows: var(--size-input-height) 1fr;
`;

export default TextArea;
