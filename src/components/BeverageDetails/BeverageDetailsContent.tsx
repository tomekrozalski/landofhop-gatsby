import React from 'react';

import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import Layout from '../Layout';
import { BeverageDetailsSeo, GridWrapper } from './elements';
import {
	AdminBar,
	Aside,
	FootNotes,
	Gallery,
	Header,
	Impressions,
	Tale,
	Testimony,
} from '.';

type Props = {
	next: BeverageBaseTypes
	previous: BeverageBaseTypes
}

const BeverageDetailsContent: React.FC<Props> = ({ next, previous }) => (
	<Layout>
		<GridWrapper>
			<Gallery />
			<Header />
			<Tale />
			<Testimony />
			<Impressions />
			<FootNotes />
			<AdminBar />
			<Aside next={next} previous={previous} />
		</GridWrapper>
		<BeverageDetailsSeo />
	</Layout>
);

export default BeverageDetailsContent;
