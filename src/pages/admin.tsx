import React from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import Layout from 'components/Layout';
import SEO from 'components/Seo';
import { ErrorHeader, ErrorWrapper } from 'elements';

const Admin: React.FC = () => (
	<Layout>
		<SEO title="loginFailed" />
		<ErrorWrapper>
			<ErrorHeader>
				<FormattedMessage id="loginFailed.title" />
			</ErrorHeader>
			<p>
				<FormattedMessage id="loginFailed.description" />
			</p>
		</ErrorWrapper>
	</Layout>
);

export default Admin;
