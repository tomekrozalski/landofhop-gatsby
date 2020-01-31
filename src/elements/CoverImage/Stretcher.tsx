import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ ratio: number }>`
	width: 100%;
	padding-bottom: ${({ ratio }) => `${ratio}%`};
`;

type Props = {
	height?: number
	width?: number
}

const Stretcher: React.FC<Props> = ({ height = 100, width = 100 }) =>
	<Wrapper ratio={(height / width) * 100} />

export default Stretcher;
