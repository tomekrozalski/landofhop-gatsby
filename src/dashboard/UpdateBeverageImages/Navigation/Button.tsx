import styled from 'styled-components';
import commonButton from './commonButton';

const Button = styled.button<{ largeIcon?: boolean }>`
  ${commonButton}
  border: 0.2rem solid var(--color-darker);
  background-color: transparent;
  transition: all var(--transition-default);
  pointer-events: auto;
  cursor: pointer;

  :hover {
    background-color: var(--color-black);
    border-color: var(--color-black);

    svg {
      fill: var(--color-white);
    }
  }

  ${({ largeIcon }) => largeIcon && 'svg { width: 2.8rem }'}
`;

export default Button;
