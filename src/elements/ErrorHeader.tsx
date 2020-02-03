import styled from 'styled-components';

const ErrorHeader = styled.h1`
	margin: 4rem;
	font: var(--font-weight-medium) 8rem / 1 var(--font-primary);
	text-shadow:
		1px 1px 1px var(--color-brighter),
		0 0 0 var(--color-darker),
		1px 1px 1px var(--color-brighter);
	color: transparent;
`;

export default ErrorHeader;
