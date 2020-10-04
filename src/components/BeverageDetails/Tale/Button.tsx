import styled from 'styled-components';

const Button = styled.button`
  padding: 0;
  color: var(--color-success-strong);
  border-bottom: 1px solid transparent;
  transition: color var(--transition-default),
    border-color var(--transition-default);

  :hover {
    color: var(--color-black);
    border-color: var(--color-success-strong);
  }
`;

export default Button;
