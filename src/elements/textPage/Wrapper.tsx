import styled from 'styled-components';

const Wrapper = styled.article`
	max-width: var(--size-container-max-width);
	margin: 0 auto;
	padding: 4rem 0;

	a {
		color: var(--color-success-strong);
		border-bottom: 1px solid var(--color-white);
		transition: border-color var(--transition-default);
	}

	a:hover {
		border-color: var(--color-black);
	}
`;

export default Wrapper;
