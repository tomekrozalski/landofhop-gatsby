import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntl } from 'gatsby-plugin-intl';
import * as d3 from 'd3';

const Text = styled.text`
    fill: var(--color-black);
    font-family: var(--font-primary);
		font-size: 1.4rem;
		text-transform: uppercase;
`;

type Props = {
	scale: any
	width: number
	x: number
	y: number
}

const AmountAxis: React.FC<Props> = ({ scale, width, x, y }) => {
	const group = useRef<SVGGElement>(null!);

	const { formatMessage } = useIntl();

	useEffect(() => {
		const axis = d3.axisRight(scale)
			.tickSize(width);

		d3.select(group.current)
			.call(axis)
			.call(g => g.select('.domain').remove())
			.call(g => g.selectAll('.tick line')
				.attr('stroke-opacity', 0.2)
				.attr('stroke-dasharray', '2'))
			.call(g => g.select('.tick:last-of-type text').remove())
			.call(g => g.selectAll('.tick text')
				.attr('x', 5)
				.attr('dy', -5));
	});

	return (
		<g ref={group} transform={`translate(${x}, ${y})`}>
			<Text x={x} y={6} textAnchor="start">
				{formatMessage({ id: 'stats.addTimeline.numberOfBeverages' })}
			</Text>
		</g>
	);
}

export default AmountAxis;
