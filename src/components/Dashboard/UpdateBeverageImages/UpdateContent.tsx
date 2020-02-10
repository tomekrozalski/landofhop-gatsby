import React from 'react';

import {
	BeverageBase as BeverageBaseTypes,
	BeverageBasicsTranslated as BeverageBasicsTranslatedTypes,
} from 'utils/types';
import { withAdmin } from '../utils'
import {
	CoverPhoto,
	Header,
	Wrapper,
} from '.';

type Props = BeverageBasicsTranslatedTypes & {
	next: BeverageBaseTypes
	previous: BeverageBaseTypes
};

const UpdateContent: React.FC<Props> = props => (
	<Wrapper>
		<Header />
		<CoverPhoto {...props} />
	</Wrapper>
);

export default withAdmin(UpdateContent);
