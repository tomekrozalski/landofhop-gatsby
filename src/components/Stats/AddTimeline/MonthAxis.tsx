import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useIntl } from 'gatsby-plugin-intl';
import * as d3 from 'd3';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

import { SiteLanguage } from 'utils/enums';

const Text = styled.text`
    fill: var(--color-black);
    font-family: var(--font-primary);
		font-size: 1.4rem;
		text-transform: uppercase;
`;

type Props = {
	scale: any
	ticks: number
	x: number
	y: number
}

const MonthAxis: React.FC<Props> = ({ scale, ticks, x, y }) => {
	const group = useRef<SVGGElement>(null!);
	const { locale } = useIntl();

	const { formatMessage } = useIntl();

	useEffect(() => {
		const axis = d3.axisBottom(scale)
			.ticks(ticks)
			.tickFormat(d => locale === SiteLanguage.pl
				? format(new Date(d), 'MMM yyyy', { locale: pl })
				: format(new Date(d), 'MMM yyyy'));

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
