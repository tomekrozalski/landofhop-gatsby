import React, { useContext } from 'react';
import styled from 'styled-components';

import { AuthenticationContext } from 'utils/contexts';

const AdminBarWrapper = styled.div`
	grid-area: admin;
	display: flex;
	align-items: flex-start;
`;

const AdminBar = () => {
	const { authenticationStatus } = useContext(AuthenticationContext);

	return authenticationStatus === 'success' ? (
		<AdminBarWrapper>AdminBar</AdminBarWrapper>
	) : null;
};

export default AdminBar;
