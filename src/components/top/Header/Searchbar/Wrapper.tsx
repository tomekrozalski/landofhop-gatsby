import styled from 'styled-components';

const Wrapper = styled.div`
	width: 10rem;
	height: 100%;
	transition:
		width var(--transition-default),
		opacity var(--transition-default);
	position: absolute;
	top: 0;
	left: 0;

	&:hover:not(:focus-within) {
		opacity: .5;
	}

	&:focus-within {
		width: 100%;
		background-color: var(--color-black);

		button {
			margin-left: auto;
		}
	}
`;

export default Wrapper;
