import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
	display: block;
	width: 100%;
`;

type Props = {
	file: {
		path: string
		preview: string
	}
}

const Preview: React.FC<Props> = ({ file }) => (
	<Img alt={file.path} src={file.preview} />
);

export default Preview;
