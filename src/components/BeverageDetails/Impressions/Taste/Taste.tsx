import React from 'react';
import styled from 'styled-components';

import {
	Bitterness,
	Fullness,
	Sweetness,
	Power,
	Hoppyness,
} from '.';

const TasteWrapper = styled.dl`
	flex-basis: 50%;
	display: flex;
	flex-wrap: wrap;
	margin: 1rem 0;

	dt {
		flex-basis: 40%;
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
		flex-basis: 60%;
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

const Taste = () => (
	<TasteWrapper>
		<Bitterness />
		<Sweetness />
		<Fullness />
		<Power />
		<Hoppyness />
	</TasteWrapper>
);

export default Taste;
