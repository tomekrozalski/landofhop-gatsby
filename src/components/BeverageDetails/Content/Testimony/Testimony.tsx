import React from 'react';

import {
	Aged,
	Alcohol,
	Barcode,
	City,
	Container,
	Country,
	DryHopped,
	ExpirationDate,
	Extract,
	Fermentation,
	Filtration,
	Ingredients,
	Pasteurization,
	Price,
	SmokedMalt,
	Style,
	Temperature,
	TestimonyWrapper,
} from '.';

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
		<Aged />
		<Style />
		<DryHopped />
		<ExpirationDate />
		<Ingredients />
		<SmokedMalt />
		<Temperature />
		<Container />
		<Price />
	</TestimonyWrapper>
);

export default Testimony;
