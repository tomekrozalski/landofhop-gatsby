import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import {
	ChartWrapper,
	Scatterplot,
	Wrapper,
} from '.';

const Stats: React.FC = () => (
	<Layout>
		<SEO title="stats" />
		<Wrapper>
			<ChartWrapper>
				<svg viewBox="0 0 1160 600">
					<Scatterplot padding={[40, 40, 60, 60]} size={[1160, 600]} />
				</svg>
			</ChartWrapper>
		</Wrapper>
	</Layout>
);

export default Stats;
