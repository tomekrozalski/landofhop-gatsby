import React from 'react';
import styled from 'styled-components';
import { useIntl } from "gatsby-plugin-intl"

import { BeverageDetails as BeverageDetailsType } from 'utils/types';
import { getValueByLanguage } from 'utils/helpers';

const Wrapper = styled.h1`
	padding: 1rem;
	font: 700 3rem / 3.8rem var(--font-primary);
	text-transform: uppercase;
`;

type Props = {
	details: BeverageDetailsType
}

const Header: React.FC<Props> = ({ details }) => {
	const { locale } = useIntl();

	const formattedName = getValueByLanguage(details.label.general.name, locale);

	return (
		<Wrapper>{formattedName.value}</Wrapper>
	);
}

export default Header;
