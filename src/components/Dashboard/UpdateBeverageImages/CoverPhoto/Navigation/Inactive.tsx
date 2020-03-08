import styled from 'styled-components';

const Inactive = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 5rem;
	height: 5rem;
	margin: 1rem;
	border-radius: 50%;
	background-color: var(--color-brighter);
	color: var(--color-darker);
	pointer-events: none;

	svg {
		width: 1.6rem;
		fill: var(--color-darker);
		transition: fill var(--transition-default);
	}
`;

export default Inactive;
