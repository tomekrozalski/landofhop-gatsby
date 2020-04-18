import { css } from 'styled-components';

export default css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 2rem;
  transition: color var(--transition-default),
    background-color var(--transition-default);
  cursor: pointer;
`;
