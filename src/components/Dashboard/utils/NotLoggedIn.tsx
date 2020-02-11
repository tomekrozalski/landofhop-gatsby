import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { ErrorHeader, ErrorWrapper } from 'elements';

const NotLoggedIn = () => (
	<ErrorWrapper>
		<ErrorHeader>
			<FormattedMessage id="dashboard.notLoggedInError" />
		</ErrorHeader>
	</ErrorWrapper>
);

export default NotLoggedIn;
