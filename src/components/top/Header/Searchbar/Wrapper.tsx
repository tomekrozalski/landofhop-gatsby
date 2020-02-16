import styled from 'styled-components';

import { breakpoints } from 'utils/theme';

const Wrapper = styled.div<{ isActive: boolean }>`
	display: flex;
	width: 100%;
	height: 100%;
	background-color: var(--color-black);
	transform: translateX(${({ isActive }) => (isActive ? 0 : 'calc(5rem - 100%)')});
	transition: transform var(--transition-default);
	position: absolute;
	top: 0;
	left: 0;

	@media (min-width: ${breakpoints.md}) {
		transform: translateX(${({ isActive }) => (isActive ? 0 : 'calc(10rem - 100%)')});
  }
`;

export default Wrapper;
