import React, { useContext } from 'react';
import styled from 'styled-components';
import { useIntl } from 'gatsby-plugin-intl';

import { getValueByLanguage } from 'utils/helpers';
import { BeverageContext } from 'components/BeverageDetails';

const Wrapper = styled.h1`
	padding: 1rem;
	font: 700 3rem / 3.8rem var(--font-primary);
	text-transform: uppercase;
`;

const Header: React.FC = () => {
	const { name } = useContext(BeverageContext);
	const { locale } = useIntl();
	const formattedName = getValueByLanguage(name, locale);

	return (
		<Wrapper>{formattedName.value}</Wrapper>
	);
}

export default Header;
