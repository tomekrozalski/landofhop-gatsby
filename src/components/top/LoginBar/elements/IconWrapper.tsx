import styled from 'styled-components';

import { breakpoints } from 'utils/theme';

const IconWrapper = styled.div`
	visibility: hidden;
	position: absolute;
	top: -25%;
	left: 2rem;
	opacity: .5;

	@media (min-width: ${breakpoints.md}) {
		visibility: visible;
	}

	@media (min-width: ${breakpoints.lg}) {
		left: 15%;
  }

	svg {
		height: var(--size-loginbar-height);
	}
`;

export default IconWrapper;
