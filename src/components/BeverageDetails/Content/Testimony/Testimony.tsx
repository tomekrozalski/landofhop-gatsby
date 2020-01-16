import React from 'react';
import styled from 'styled-components';

import {
	Alcohol,
	Barcode,
	City,
	Country,
	Extract,
	Fermentation,
	Filtration,
	Pasteurization,
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
		<Fermentation />
		<Extract />
		<Alcohol />
		<Filtration />
		<Pasteurization />
		{/* <Aged /> */}
		{/* <Style /> */}
		{/* <DryHopped /> */}
		{/* <ExpirationDate /> */}
		{/* <Ingredients /> */}
		{/* <SmokedMalt /> */}
		{/* <Temperature /> */}
		{/* <Container /> */}
		{/* <Price /> */}
	</TestimonyWrapper>
);

export default Testimony;