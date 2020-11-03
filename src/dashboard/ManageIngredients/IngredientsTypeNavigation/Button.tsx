import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: var(--color-brighter);
  transition: background-color var(--transition-default),
    color var(--transition-default);
  cursor: pointer;

  &:hover {
    background-color: var(--color-bright);
  }

  &.selected.malt {
    background-color: var(--color-ingredients-malt);
    color: var(--color-white);
  }

  &.selected.hop {
    background-color: var(--color-ingredients-hop);
    color: var(--color-white);
  }

  &.selected.yeast {
    background-color: var(--color-ingredients-yeast);
    color: var(--color-black);
  }

  &.selected.appendix {
    background-color: var(--color-ingredients-appendix);
    color: var(--color-black);
  }
`;

export default Button;
