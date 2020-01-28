import styled from 'styled-components';

import { breakpoints } from 'utils/theme';

const GridWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr;
	grid-template-areas:
		'aside'
		'gallery'
		'header'
		'tale'
		'testimony';
	column-gap: 4rem;
  max-width: var(--size-container-max-width);
  padding: 2rem;
  margin: 0 auto 6rem auto;

	@media (min-width: ${breakpoints.md}) {
		grid-template-columns: 22rem 1fr 1fr;
		grid-template-areas:
			'aside aside aside'
			'gallery header header'
			'gallery tale testimony'
			'gallery testimony testimony'
			'gallery . .';
  }

	@media (min-width: ${breakpoints.lg}) {
		grid-template-columns: 22rem 1fr 18rem;
		grid-template-areas:
			'gallery header aside'
			'gallery tale aside'
			'gallery testimony aside'
			'gallery . aside';
		padding: 2rem 1rem;
  }
`;

export default GridWrapper;

