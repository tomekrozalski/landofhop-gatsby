import React, { useContext } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { AuthenticationContext } from 'utils/contexts';
import { Warning } from 'elements/icons';
import { IconWrapper, LoginBarContainer } from './elements';

const Button = styled.button`
	margin-left: 2rem;
	padding: 0.5rem 1rem;
	border: 1px solid var(--color-danger-strong);
	background-color: transparent;
	color: var(--color-black);
	transition: background-color var(--transition-default), color var(--transition-default);
	font-weight: 300;

	:hover {
		background-color: var(--color-danger-strong);
		color: var(--color-white);
	}
`;

const LoginError = () => {
	const { setAuthenticationStatus } = useContext(AuthenticationContext);

	return (
		<LoginBarContainer as="div">
			<IconWrapper><Warning /></IconWrapper>
			<FormattedMessage id="loginbar.loginFailed" />
			<Button onClick={() => setAuthenticationStatus('idle')}>
				<FormattedMessage id="loginbar.tryAgain" />
			</Button>
		</LoginBarContainer>
	);
}

export default LoginError;
