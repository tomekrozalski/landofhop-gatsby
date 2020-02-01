import React from 'react';
import styled from 'styled-components';

import {
	Bitterness,
	Fullness,
	Sweetness,
} from '.';

const ImpressionsWrapper = styled.dl`
	grid-area: impressions;
	display: flex;
	flex-wrap: wrap;
	margin: 1rem 0;

	dt {
    flex-basis: 33%;
		padding-right: 1rem;
		text-align: right;

		&::first-letter {
			text-transform: uppercase;
		}

		&::after {
			content: ':';
		}
  }

  dd {
    flex-basis: 66%;
		display: flex;
		flex-direction: column;
		justify-content: center;
    margin: 0;
    padding: 0;
  }

	dd::after {
		display: block;
		content: '';
	}
`;

const Impressions: React.FC = () => (
	<ImpressionsWrapper>
		<Bitterness />
		<Sweetness />
		<Fullness />
	</ImpressionsWrapper>
);

export default Impressions;
