import React, { useContext } from 'react';

import { AuthenticationStatus as AuthenticationStatusEnum } from 'utils/enums';
import { AuthenticationContext } from 'utils/contexts';

const withAdminHOC = (Component: any) => (props: any) => {
	const { authenticationStatus } = useContext(AuthenticationContext);

	switch (authenticationStatus) {
		case AuthenticationStatusEnum.loading:
			return <div>loading</div>;
		case AuthenticationStatusEnum.success:
			return <Component {...props} />;
		default:
			return <div>niezalogowany</div>
	}
}


export default withAdminHOC;