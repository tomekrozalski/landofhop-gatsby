import React, { useContext } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { AuthenticationContext } from 'utils/contexts';
import { LoginBarContainer } from './elements';

const LoginSuccess = () => {
	const { setAuthenticationStatus } = useContext(AuthenticationContext);

	return (
		<LoginBarContainer as="div">
			<FormattedMessage id="loginbar.loginSuccess" />
		</LoginBarContainer>
	);
}

export default LoginSuccess;
