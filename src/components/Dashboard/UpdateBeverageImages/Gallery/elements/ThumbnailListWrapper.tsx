import styled from 'styled-components';

const ThumbnailListWrapper = styled.ul`
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-gap: .5rem;
	padding: .5rem;
`;

export default ThumbnailListWrapper;
