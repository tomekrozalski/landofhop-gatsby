import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

type Props = {
	x: number
	y: number
}

const Axis: React.FC<Props> = ({ x, y }) => {
	const group = useRef<SVGGElement>(null!);

	useEffect(() => {
		const scale = d3
			.scaleLinear()
			.domain([0, 10])
			.range([0, 200]);

		const axis = d3.axisBottom(scale);
		d3.select(group.current).call(axis);
	}, []);

	return <g transform={`translate(${x}, ${y})`} ref={group} />
}

export default Axis;
