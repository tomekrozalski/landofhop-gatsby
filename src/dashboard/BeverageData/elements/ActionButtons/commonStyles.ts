import { css } from 'styled-components';

export default css`
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: var(--size-input-height);
  font-size: 2rem;
  transition: color var(--transition-default),
    background-color var(--transition-default);
  cursor: pointer;
`;
