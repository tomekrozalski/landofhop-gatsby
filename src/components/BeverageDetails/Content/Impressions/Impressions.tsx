import React from 'react';
import styled from 'styled-components';

import { Appearance, Taste } from '.';

const ImpressionsWrapper = styled.div`
	grid-area: impressions;
	display: flex;
	align-items: flex-start;
`;

const Impressions: React.FC = () => (
	<ImpressionsWrapper>
		<Taste />
		<Appearance />
	</ImpressionsWrapper>
);

export default Impressions;
