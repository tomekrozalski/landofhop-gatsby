import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';
import styled from 'styled-components';

const HeaderWrapper = styled.h1`
	padding: 4rem 0 2rem 0;
	text-align: center;
`;

const Header: React.FC = () => (
	<HeaderWrapper>
		<FormattedMessage id="dashboard.updateBeverageImages.title" />
	</HeaderWrapper>
);

export default Header;
