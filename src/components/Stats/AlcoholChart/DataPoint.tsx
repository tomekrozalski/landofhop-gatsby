import React from 'react';
import styled from 'styled-components';

const Rectangle = styled.rect`
	fill: steelblue;
	fill-opacity: .8;
	stroke: steelblue;
	stroke-width: 1.5px;
`;

type Props = {
	height: number
	x: number
	y: number
}

const DataPoint: React.FC<Props> = ({ height, x, y }) => (
	<Rectangle x={x} y={y} width="3" height={height - y} />
);

export default DataPoint;
