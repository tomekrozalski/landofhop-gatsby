import React from 'react';
import * as d3 from 'd3';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

import { AxisType } from '../utils/enums';
import { Axis } from '../';
import { AlcoholData } from './utils/types';
import { getUndefined, normalizeData } from './utils/helpers';
import { DataPoint, Footer, Wrapper } from '.';

type Props = {
	size: [number, number]
	padding: [number, number, number, number]
}

const AlcoholChart: React.FC<Props> = ({ padding, size }) => {
	const [paddingTop, paddingRight, paddingBottom, paddingLeft] = padding;
	const [width, height] = size;

	const { formatMessage } = useIntl();

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

	return (
		<Wrapper>
			<svg viewBox="0 0 1160 600">
				<g transform={`translate(${paddingLeft}, ${paddingTop})`}>
					{data.map(({ value, beverages }) => (
						<DataPoint
							key={value}
							height={height - paddingTop - paddingBottom}
							x={xScale(value)}
							y={yScale(beverages)}
						/>
					))}
					<Axis
						x={0}
						y={0}
						type={AxisType.Left}
						scale={yScale}
						label={formatMessage({ id: 'stats.alcohol.numberOfBeverages' })}
					/>
					<Axis
						x={0}
						y={height - paddingTop - paddingBottom} type={AxisType.Bottom}
						scale={xScale}
						label={formatMessage({ id: 'stats.alcohol.alcohol' })}
					/>
				</g>
			</svg>
			<Footer undefinedAlcohol={undefinedAlcohol} />
		</Wrapper>
	);
}

export default AlcoholChart;
