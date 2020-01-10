import React, { useContext } from 'react';

import { BeverageContext } from 'components/BeverageDetails';
import { Contract, Name } from '.';

const Header: React.FC = () => {
	const { series, brand, cooperation } = useContext(BeverageContext);

	return (
		<>
			<Name />
			<Contract />
		</>

	);
}

export default Header;
