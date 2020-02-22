import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import {
	Axis,
	Barchart,
	ChartWrapper,
	Wrapper,
} from '.';

const Stats: React.FC = () => {
	console.log('stats');

	return (
		<Layout>
			<SEO title="stats" />
			<Wrapper>
				<ChartWrapper>
					<svg viewBox="0 0 500 300" id="svg">
						<Barchart positionX={50} positionY={50} sizeX={400} sizeY={200} />
					</svg>
				</ChartWrapper>
			</Wrapper>

		</Layout>
	);
};

export default Stats;
