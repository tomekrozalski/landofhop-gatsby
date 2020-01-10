import React, { useContext } from 'react';
import styled from 'styled-components';

import { BeverageContext } from 'components/BeverageDetails';
import { getLangAttr } from 'utils/helpers';

const Wrapper = styled.h1<{ lang?: string }>`
	padding: 1rem 0;
	font: 700 3rem / 3.8rem var(--font-primary);
	text-transform: uppercase;
`;

const Name: React.FC = () => {
	const { name } = useContext(BeverageContext);

	return (
		<Wrapper lang={getLangAttr(name.language)}>
			{name.value}
		</Wrapper>
	);
}

export default Name;
