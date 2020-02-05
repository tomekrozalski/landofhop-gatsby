import React from 'react';
import styled from 'styled-components';

import {
	Brand,
	Contract,
	Cooperation,
	Name,
	Series,
} from '.';

const HeaderWrapper = styled.header`
	grid-area: header;
	margin-top: 1rem;
`;

const Header: React.FC = () => (
	<HeaderWrapper>
		<Name />
		<p>
			<Contract />
			<Cooperation />
			<Brand />
			<Series />
		</p>
	</HeaderWrapper>
);

export default Header;
