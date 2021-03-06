import styled from 'styled-components';

import { ButtonBasicCSS } from 'elements';
import Title from './Title';

const Button = styled.button`
  ${ButtonBasicCSS}
  width: 3.4rem;
  background-color: var(--color-success-light);
  position: relative;

  svg {
    width: 1.6rem;
    fill: var(--color-white);
  }

  :hover {
    background-color: var(--color-success-strong);

    ${Title} {
      transform: scaleX(1);
    }
  }
`;

export default Button;
