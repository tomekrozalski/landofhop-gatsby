import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as d3 from 'd3';
import { differenceInMonths } from 'date-fns';

import { MonthData } from './utils/types';
import { normalizeData } from './utils/helpers';
import { AmountAxis, MonthAxis } from '.';

type Props = {
	size: [number, number]
	padding: [number, number, number, number]
}

const AddChart: React.FC<Props> = ({ padding, size }) => {
	const [paddingTop, paddingRight, paddingBottom, paddingLeft] = padding;
	const [width, height] = size;

	const rawData = useStaticQuery(graphql`
    query AddStats {
      allBeverage {
				edges {
					node {
						added
					}
				}
			}
    }
	`);

	const data: MonthData[] = normalizeData(rawData);
	const initialMonth = new Date(data[0].year, data[0].month);
	const lastMonth = new Date(data[data.length - 1].year, data[data.length - 1].month);
	const ticks = differenceInMonths(lastMonth, initialMonth);

	const xScale = d3
		.scaleLinear()
		.domain([initialMonth, lastMonth])
		.range([0, width - paddingLeft - paddingRight]);

	const yScale = d3
		.scaleLinear()
		.domain([Math.max(...data.map(({ beverages }) => beverages)) + 3, 0])
		.range([0, height - paddingTop - paddingBottom]);

	return (
		<svg viewBox="0 0 1160 600">
			<g transform={`translate(${paddingLeft}, ${paddingTop})`}>
				<AmountAxis
					x={0}
					y={0}
					scale={yScale}
					width={width - paddingLeft - paddingRight}
				/>
				<MonthAxis
					scale={xScale}
					ticks={ticks}
					x={0}
					y={height - paddingTop - paddingBottom}
				/>
				{data.map(({ beverages, month, year }) => (
					<circle
						key={`${month}, ${year}`}
						cx={xScale(new Date(year, month))}
						cy={yScale(beverages)}
						r="3"
					/>
				))}
			</g>
		</svg>
	);
}

export default AddChart;
