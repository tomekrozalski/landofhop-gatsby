import React from 'react';
import styled from 'styled-components';

import {
	Barcode,
	City,
	Country,
} from '.';

const TestimonyWrapper = styled.dl`
	grid-area: testimony;
	margin: 1rem 0;
`;

const Testimony: React.FC = () => (
	<TestimonyWrapper>
		<City />
		<Country />
		<Barcode />
	</TestimonyWrapper>
);

export default Testimony;
