import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import Layout from 'components/Layout';
import SEO from 'components/Seo';

const Stats: React.FC = () => {
	const division = useRef<HTMLDivElement>(null!);

	useEffect(() => {
		let shapes = d3
			.scaleOrdinal()
			.domain(['triangle', 'rectangle', 'polygon', 'square'])
			.range(['red', 'orange', 'green', 'red']);

		let linear = d3
			.scaleLinear()
			.domain([0, 200])
			.range([10, 500]);

		division.current.innerHTML = linear(100).toString();
	}, []);

	return (
		<Layout>
			<SEO title="stats" />
			Test
			<div ref={division}>...</div>
		</Layout>
	);
};

export default Stats;
