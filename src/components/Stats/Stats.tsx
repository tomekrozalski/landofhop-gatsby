import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import { Header, Wrapper } from 'elements/textPage';
import { AlcoholChart } from '.';

const Stats: React.FC = () => (
	<Layout>
		<SEO title="stats" />
		<Wrapper>
			<Header>Statystyki</Header>
			<AlcoholChart padding={[40, 40, 60, 60]} size={[1160, 600]} />
		</Wrapper>
	</Layout>
);

export default Stats;
