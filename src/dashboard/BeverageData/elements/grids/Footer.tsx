import styled from 'styled-components';

import commonStyles from './commonStyles';

const Footer = styled.footer<{ enhanced?: boolean }>`
  ${commonStyles}
  grid-template-columns: ${({ enhanced }) =>
    enhanced ? 'repeat(2, 22rem) 1fr' : '22rem 1fr'};
  grid-template-rows: var(--size-input-height);
  margin-left: ${({ enhanced }) => (enhanced ? 46 : 69)}rem;
`;

export default Footer;
