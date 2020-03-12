import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.li`
	border: 1px solid var(--color-brighter);
	padding: .5rem 0;

	img { width: 100%; }
`;

const FileName = styled.div`
	font: 400 1rem / 1 var(--font-primary);
	text-align: center;
	overflow: hidden;
`;

type Props = {
	name: string
	src: string
}

const ThumbnailItem: React.FC<Props> = ({ name, src }) => (
	<Wrapper>
		<img alt={name} src={src} />
		<FileName>{name}</FileName>
	</Wrapper>
);

export default ThumbnailItem;
