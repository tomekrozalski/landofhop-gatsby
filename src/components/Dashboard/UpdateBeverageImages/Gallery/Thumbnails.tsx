import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;
`;

const One = styled.li`
	width: calc(10% - 1rem);
	border: 2px dashed var(--color-bright);
  margin: .5rem;
	background-color: var(--color-brighter);

	img { width: 100%; }
`;

const FileName = styled.div`
	margin: 1rem .5rem;
	font: 400 1.2rem / 1 var(--font-primary);
	text-align: center;
`;

type Props = {
	files: File[]
}

const Thumbnails: React.FC<Props> = ({ files }) => (
	<Wrapper>
		{files.map(file => (
			<One key={file.name}>
				<img alt={file.name} src={URL.createObjectURL(file)} />
				<FileName>{file.name}</FileName>
			</One>
		))}
	</Wrapper>
);

export default Thumbnails;
