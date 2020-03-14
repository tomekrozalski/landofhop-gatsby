import React, { useContext } from 'react';

import { AuthenticationStatus as AuthenticationStatusEnum } from 'utils/enums';
import { AuthenticationContext } from 'utils/contexts';

const checkIsLoggedInHOC = (Component: React.FC<any>) => (props: any) => {
	const { authenticationStatus } = useContext(AuthenticationContext);

	return authenticationStatus === AuthenticationStatusEnum.success
		? <Component {...props} loggedIn />
		: <Component {...props} />;
}

export default checkIsLoggedInHOC;