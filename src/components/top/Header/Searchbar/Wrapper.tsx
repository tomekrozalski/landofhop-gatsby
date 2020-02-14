import styled from 'styled-components';

const Wrapper = styled.div<{ isActive: boolean }>`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	height: 100%;
	background-color: var(--color-black);
	transform: translateX(${({ isActive }) => (isActive ? '0' : 'calc(10rem - 100%)')});
	transition: transform var(--transition-default);
	position: absolute;
	top: 0;
	left: 0;
`;

export default Wrapper;
