import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntl } from 'gatsby-plugin-intl';
import * as d3 from 'd3';
import { format, getMonth, getYear } from 'date-fns';
import { pl } from 'date-fns/locale';

const Text = styled.text`
    fill: var(--color-black);
    font-family: var(--font-primary);
		font-size: 1.4rem;
		text-transform: uppercase;
`;

type Props = {
	scale: any
	x: number
	y: number
}

const MonthAxis: React.FC<Props> = ({ scale, x, y }) => {
	const group = useRef<SVGGElement>(null!);

	const { formatMessage } = useIntl();

	useEffect(() => {
		console.log('scale', scale);

		const axis = d3.axisBottom(scale)
			.ticks(12)
			.tickFormat(d => {
				console.log('d', d, getMonth(d), getYear(d), d3.timeMonth(d));
				return format(new Date(d), 'MM yyyy', { locale: pl });
			});

		console.log('axis', axis);

		d3.select(group.current).call(axis);
	});

	return (
		<g ref={group} transform={`translate(${x}, ${y})`}>
			<Text x={scale.range()[1]} y={40} textAnchor="end">
				{formatMessage({ id: 'stats.addTimeline.month' })}
			</Text>
		</g>
	);
}

export default MonthAxis;
