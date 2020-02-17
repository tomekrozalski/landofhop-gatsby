import styled from 'styled-components';

import { breakpoints } from 'utils/theme';

const ErrorHeader = styled.h1`
	margin: 4rem;
	font: var(--font-weight-medium) 4rem / 1.2 var(--font-primary);
	text-shadow:
		1px 1px 1px var(--color-brighter),
		0 0 0 var(--color-darker),
		1px 1px 1px var(--color-brighter);
	color: transparent;

	@media (min-width: ${breakpoints.md}) {
		font-size: 6rem;
  }

	@media (min-width: ${breakpoints.lg}) {
		font-size: 8rem;
  }
`;

export default ErrorHeader;
