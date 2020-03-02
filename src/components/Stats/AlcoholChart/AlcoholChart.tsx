import React, { useEffect } from 'react';
import * as d3 from 'd3';
import { useStaticQuery, graphql } from 'gatsby';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { SectionHeader } from 'elements';
import { AlcoholData } from './utils/types';
import { getUndefined, normalizeData } from './utils/helpers';
import {
	AlcoholAxis,
	AmountAxis,
	DataPoint,
	Footer,
} from '.';

type Props = {
	size: [number, number]
	padding: [number, number, number, number]
}

const AlcoholChart: React.FC<Props> = ({ padding, size }) => {
	const [paddingTop, paddingRight, paddingBottom, paddingLeft] = padding;
	const [width, height] = size;

	const rawData = useStaticQuery(graphql`
    query AlcoholStats {
      allBeverage {
				edges {
					node {
						alcohol {
							label {
								value
								unit
								relate
							}
							producer {
								relate
								unit
								value
							}
						}
					}
				}
			}
    }
	`);

	const data: AlcoholData[] = normalizeData(rawData);
	const undefinedAlcohol = getUndefined(rawData);

	const xScale = d3
		.scaleLinear()
		.domain([0, Math.max(...data.map(({ value }) => value)) + 1])
		.range([0, width - paddingLeft - paddingRight]);

	const yScale = d3
		.scaleLinear()
		.domain([Math.max(...data.map(({ beverages }) => beverages)) + 3, 0])
		.range([0, height - paddingTop - paddingBottom]);

	useEffect(() => {
		d3.selectAll('.datapoint-background').raise();
		d3.selectAll('.datapoint-text').raise();
	}, []);

	return (
		<>
			<SectionHeader>
				<FormattedMessage id="stats.alcohol.name" />
			</SectionHeader>
			<svg viewBox="0 0 1160 600">
				<g transform={`translate(${paddingLeft}, ${paddingTop})`}>
					<AmountAxis
						x={0}
						y={0}
						scale={yScale}
						width={width - paddingLeft - paddingRight}
					/>
					<AlcoholAxis
						scale={xScale}
						ticks={Math.max(...data.map(({ value }) => value)) + 1}
						x={0}
						y={height - paddingTop - paddingBottom}
					/>
					{data.map(({ value, beverages }) => (
						<DataPoint
							key={value}
							beverages={beverages}
							height={height - paddingTop - paddingBottom}
							value={value}
							x={xScale(value)}
							y={yScale(beverages)}
						/>
					))}
				</g>
			</svg>
			<Footer undefinedAlcohol={undefinedAlcohol} />
		</>
	);
}

export default AlcoholChart;
