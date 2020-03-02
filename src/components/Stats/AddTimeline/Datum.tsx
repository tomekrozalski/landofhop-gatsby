import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styled from 'styled-components';

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
	xScale: any
	yScale: any
}

const Datum: React.FC<Props> = ({ data, xScale, yScale }) => {
	const theline = useRef(null!);

	useEffect(() => {
		const line = d3.line()
			.curve(d3.curveBasis)
			.x(({ month, year }: MonthData) => xScale(new Date(year, month)))
			.y(({ beverages }: MonthData) => yScale(beverages / 1));

		d3.select(theline.current)
			.datum(data)
			.attr('d', line);
	}, []);

	return <Path ref={theline} />;
};

export default Datum;
