import React from 'react';
import styled from 'styled-components';

import { Clarity, Color } from '.';

const AppearanceWrapper = styled.dl`
	flex-basis: 50%;
	display: flex;
	flex-wrap: wrap;
	margin: 1rem;

	dt {
		flex-basis: 50%;
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
		flex-basis: 50%;
		margin: 0;
		padding: 0;
	}

	dd::after {
		display: block;
		content: '';
	}
`;

const Appearance = () => (
	<AppearanceWrapper>
		<Color />
		<Clarity />
	</AppearanceWrapper>
);

export default Appearance;
