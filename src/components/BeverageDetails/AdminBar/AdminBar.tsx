import React, { useContext } from 'react';
import styled from 'styled-components';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';

import { AuthenticationContext } from 'utils/contexts';
import { BeverageContext } from 'components/BeverageDetails';
import { ButtonBasicCSS } from 'elements';

const AdminBarWrapper = styled.div`
	grid-area: admin;
	display: flex;
	align-items: flex-start;
`;

const StyledLink = styled(Link)`
	${ButtonBasicCSS}
	background-color: var(--color-black);
  color: var(--color-white);

	&:hover {
		background-color: var(--color-success-strong);
	}
`;

const AdminBar = () => {
	const { authenticationStatus } = useContext(AuthenticationContext);
	const { badge, brand, shortId } = useContext(BeverageContext);

	return authenticationStatus === 'success' ? (
		<AdminBarWrapper>
			<StyledLink to={`/update-beverage-images/${shortId}/${brand.badge}/${badge}`}>
				<FormattedMessage id="beverage.details.adminBar.updatePhotos" />
			</StyledLink>
		</AdminBarWrapper>
	) : null;
};

export default AdminBar;
