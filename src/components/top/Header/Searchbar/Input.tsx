import styled from 'styled-components';

import { breakpoints } from 'utils/theme';

const Input = styled.input.attrs({
  type: 'text',
})<{ isActive: boolean }>`
  flex-grow: 1;
  height: var(--size-header-height);
  border: 0;
  padding: 0 2rem;
  background: transparent;
  font: var(--font-weight-regular) 2rem / 1 var(--font-primary);
  text-transform: uppercase;
  color: var(--color-white);
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity var(--transition-default);
  ${({ isActive }) => isActive && 'transition-delay: .2s'};

  @media (min-width: ${breakpoints.md}) {
    font-size: 3rem;
  }

  @media (min-width: ${breakpoints.xl}) {
    height: calc(var(--size-header-height) - 4rem);
    margin: 2rem 0;
    border-bottom: 0.2rem solid var(--color-white);
    font-size: 4rem;
  }

  :focus {
    outline: none;
  }

  ::-webkit-input-placeholder {
    line-height: normal;
  }
`;

export default Input;
