import styled from 'styled-components';

import commonStyles from './commonStyles';

const Footer = styled.footer`
  ${commonStyles}
  grid-template-columns: repeat(2, 22rem) 1fr;
  grid-template-rows: var(--size-input-height);
  margin-left: 46rem;
`;

export default Footer;
