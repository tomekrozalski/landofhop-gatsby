import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';
import { format, getUnixTime } from 'date-fns';

import { MonthData } from './utils/types';

const Path = styled.path`
	fill: none;
	stroke: steelblue;
	stroke-width: 3.5;
	stroke-linejoin: round;
	stroke-linecap: round;
`;

type Props = {
	data: any
	ticks: number
	xScale: any
	yScale: any
}

const Datum: React.FC<Props> = ({ data, ticks, xScale, yScale }) => {
	const theline = useRef(null!);

	useEffect(() => {
		const kde = (kernel, thresholds, data) => {
			return thresholds.map(t => {
				console.log('t', t);

				return [t, d3.mean(data, d => {
					console.log('d', getUnixTime(new Date(d.year, d.month)));

					return kernel(t - (getUnixTime(new Date(d.year, d.month)) * 1000));
				})];
			});
		}

		const epanechnikov = (bandwidth) => {
			return x => Math.abs(x /= bandwidth) <= 1 ? 0.75 * (1 - x * x) / bandwidth : 0;
		}

		const thresholds = xScale.ticks(ticks);
		const density = kde(epanechnikov(1), thresholds, data);

		console.log('->', data, density);

		const line = d3.line()
			// .curve(d3.curveStep)
			.x(({ month, year }: MonthData) => xScale(new Date(year, month)))
			.y(({ beverages }: MonthData) => yScale(beverages / 1))

		d3.select(theline.current)
			.datum(data)
			.attr("d", line);
	});

	return (
		<Path ref={theline} />
	);
};

export default Datum;
