import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;
	padding: .5rem;
`;

const Item = styled.li`
	width: calc(10% - 1rem);
	border: 1px solid var(--color-brighter);
  margin: .2rem;
	padding: .5rem 0;

	img { width: 100%; }
`;

const FileName = styled.div`
	font: 400 1rem / 1 var(--font-primary);
	text-align: center;
	overflow: hidden;
`;

type Props = {
	files: File[]
}

const Thumbnails: React.FC<Props> = ({ files }) => (
	<Wrapper>
		{files.map(file => (
			<Item key={file.name}>
				<img alt={file.name.substr(0, file.name.lastIndexOf('.')) || file.name} src={URL.createObjectURL(file)} />
				<FileName>{file.name.substr(0, file.name.lastIndexOf('.')) || file.name}</FileName>
			</Item>
		))}
	</Wrapper>
);

export default Thumbnails;
