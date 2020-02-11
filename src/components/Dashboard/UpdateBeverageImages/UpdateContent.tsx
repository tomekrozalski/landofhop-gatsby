import React from 'react';

import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import { TranslatedBeverage as TranslatedBeverageTypes } from './utils/types';
import { withAdmin } from '../utils'
import {
	CoverPhoto,
	Gallery,
	Header,
	Wrapper,
} from '.';

type Props = TranslatedBeverageTypes & {
	next: BeverageBaseTypes
	previous: BeverageBaseTypes
};

const UpdateContent: React.FC<Props> = props => (
	<Wrapper>
		<Header />
		<CoverPhoto {...props} />
		<Gallery {...props} />
	</Wrapper>
);

export default withAdmin(UpdateContent);
