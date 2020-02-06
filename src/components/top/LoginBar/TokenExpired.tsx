import React, { useContext } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { AuthenticationContext } from 'utils/contexts';
import { Warning } from 'elements/icons';
import { IconWrapper, LoginBarContainer, ResetButton } from './elements';

const TokenExpired = () => {
	const { setAuthenticationStatus } = useContext(AuthenticationContext);

	return (
		<LoginBarContainer as="div">
			<IconWrapper><Warning /></IconWrapper>
			<FormattedMessage id="loginbar.tokenExpired" />
			<ResetButton onClick={() => setAuthenticationStatus('idle')}>
				<FormattedMessage id="loginbar.loginAgain" />
			</ResetButton>
		</LoginBarContainer>
	);
}

export default TokenExpired;
