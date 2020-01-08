import React, { useContext } from 'react';
import styled from 'styled-components';

import { BeverageContext } from 'components/BeverageDetails';

const Brand = styled.h1`
	padding: 1rem 0;
	font: 700 3rem / 3.8rem var(--font-primary);
	text-transform: uppercase;
`;

const Header: React.FC = () => {
	const { name, series } = useContext(BeverageContext);

	return (
		<>
			<Brand>{name.value}</Brand>
			<p>seria: {series && series.label && series.label.map(item => item.value).join(', ')} / {series && series.producer && series.producer.map(item => item.value).join(', ')}</p>
		</>

	);
}

export default Header;
