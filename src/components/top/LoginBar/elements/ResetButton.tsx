import styled from 'styled-components';

const ResetButton = styled.button`
	margin-left: 2rem;
	padding: 0.5rem 1rem;
	border: 1px solid var(--color-danger-strong);
	background-color: transparent;
	color: var(--color-black);
	transition: background-color var(--transition-default), color var(--transition-default);
	font-weight: 300;

	:hover {
		background-color: var(--color-danger-strong);
		color: var(--color-white);
	}
`;

export default ResetButton;
