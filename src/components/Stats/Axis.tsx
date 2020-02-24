import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as d3 from 'd3';

import { AxisType } from './utils/enums';

const Text = styled.text`
    fill: var(--color-black);
    font-family: var(--font-primary);
		font-size: 1.4rem;
		text-transform: uppercase;
`;

type Props = {
	x: number
	y: number
	type: AxisType
	scale: any
	label: string
}

const Axis: React.FC<Props> = ({ x, y, type, scale, label }) => {
	const group = useRef<SVGGElement>(null!);

	useEffect(() => {
		const axis = d3[`axis${type}`](scale).tickValues([1, 2, 3, 5, 8, 13, 21]);;
		d3.select(group.current).call(axis);
	});

	const labelPosition = () => {
		switch (type) {
			case AxisType.Top:
				return { x: scale.range()[1] + 20, y: 0 };
			case AxisType.Right:
				return { x: 20, y: 0 };
			case AxisType.Bottom:
				return { x: scale.range()[1], y: 40, textAnchor: 'end' };
			case AxisType.Left:
				return { x: x + 12, y: 6, textAnchor: 'start' };
		}
	}

	return (
		<g ref={group} transform={`translate(${x}, ${y})`}>
			<Text {...labelPosition()}>{label}</Text>
		</g>
	);
}

export default Axis;
