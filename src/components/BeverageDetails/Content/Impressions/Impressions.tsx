import React from 'react';
import styled from 'styled-components';

import {
	Bitterness,
} from '.';

const ImpressionsWrapper = styled.div`
	grid-area: impressions;
	margin: 1rem 0;
`;

const Impressions: React.FC = () => (
	<ImpressionsWrapper>
		<Bitterness />
	</ImpressionsWrapper>
);

export default Impressions;
