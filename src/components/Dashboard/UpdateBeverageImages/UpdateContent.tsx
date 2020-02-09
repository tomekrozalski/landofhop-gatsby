import React from 'react';

import { BeverageBasicsTranslated as BeverageBasicsTranslatedTypes } from 'utils/types';
import { withAdmin } from '../utils'
import {
	CoverPhoto,
	Header,
	Wrapper,
} from '.';

const UpdateContent: React.FC<BeverageBasicsTranslatedTypes> = props => (
	<Wrapper>
		<Header />
		<CoverPhoto {...props} />
	</Wrapper>
);

export default withAdmin(UpdateContent);
