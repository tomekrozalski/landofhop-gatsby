import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-dark);
  background-color: var(--color-dark);
  font: var(--font-weight-regular) 1.6rem / 1 var(--font-primary);
  color: var(--color-white);
`;

export const ActiveButton: any = styled(Button)`
  transition: background-color var(--transition-default),
    color var(--transition-default);
  ${({ current }: { current: 1 | 0 }) =>
    current
      ? `
			background: var(--color-black);
			color: var(--color-white);
			border-color: var(--color-black);
		`
      : `
			background-color: var(--color-brighter);
			color: var(--color-darker);
		`}

  &:hover {
    background-color: var(--color-white);
    color: var(--color-black);
  }

  &.active {
    background-color: var(--color-black);
    border-color: var(--color-black);
    color: var(--color-white);
  }
`;

export const InactiveButton = styled(Button)`
  cursor: not-allowed;
`;
