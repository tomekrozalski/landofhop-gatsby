import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as d3 from 'd3';

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

	console.log('data', data.map(({ month, year }) => new Date(year, month)));

	const xScale = d3
		.scaleLinear()
		.domain([new Date(2017, 6), new Date(2020, 1)])
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
					x={0}
					y={height - paddingTop - paddingBottom}
				/>
				{data.map(({ beverages, month, year }) => (
					<circle
						key={`${month}, ${year}`}
						x={xScale(new Date(year, month))}
						y={yScale(beverages)}
					/>
				))}
			</g>
		</svg>
	);
}

export default AddChart;
