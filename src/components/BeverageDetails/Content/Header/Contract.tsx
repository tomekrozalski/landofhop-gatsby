import React, { useContext } from 'react';
import styled from 'styled-components';

import { BeverageContext } from 'components/BeverageDetails';
import { getLangAttr } from 'utils/helpers';

const Wrapper = styled.h2<{ lang?: string }>`
	padding: 0;
	font: 700 2rem / 2.8rem var(--font-primary);
`;

const Par = styled.span``;

const Contact: React.FC = () => {
	const { contract } = useContext(BeverageContext);

	if (!contract) {
		return null;
	}

	const values = [];

	if (contract.label) {
		values.push(<Par>{contract.label.name.value}</Par>)
		values.push('/');
	}

	console.log('contract', contract);

	return (
		<Wrapper>
			{values}
		</Wrapper>
	);
}

export default Contact;
