import React from 'react';

import {
	Brand,
	Contract,
	Cooperation,
	Name,
	Series,
} from '.';

const Header: React.FC = () => (
	<>
		<Name />
		<Contract />
		<Cooperation />
		<Brand />
		<Series />
	</>
);

export default Header;
