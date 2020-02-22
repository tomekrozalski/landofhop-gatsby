import React from 'react';
import * as d3 from 'd3';

import { AxisType } from './utils/enums';
import { Axis } from '.';

const data = d3.range(100).map(_ => [Math.random(), Math.random()]);

type Props = {
	size: [number, number]
	padding: [number, number, number, number]
}

const Scatterplot: React.FC<Props> = ({ padding, size }) => {
	const [paddingTop, paddingRight, paddingBottom, paddingLeft] = padding;
	const [width, height] = size;

	const xScale = d3
		.scaleLinear()
		.domain([0, 1])
		.range([0, width - paddingLeft - paddingRight]);

	const yScale = d3
		.scaleLinear()
		.domain([1, 0])
		.range([0, height - paddingTop - paddingBottom]);

	return (
		<g transform={`translate(${paddingLeft}, ${paddingTop})`}>
			{data.map(([x, y]) => <circle cx={xScale(x)} cy={yScale(y)} r="3" />)}
			<Axis x={0} y={0} type={AxisType.Left} scale={yScale} label="alkohol" />
			<Axis x={0} y={height - paddingTop - paddingBottom} type={AxisType.Bottom} scale={xScale} label="ilość piw" />
		</g>
	);
}

export default Scatterplot;
