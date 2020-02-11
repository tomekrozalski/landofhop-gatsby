import React, { useContext, useEffect } from 'react';

import { AuthenticationContext } from 'utils/contexts';
import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import { BeverageContext } from './UpdateBeverageImages';
import { withAdmin } from '../utils'
import {
	CoverPhoto,
	Gallery,
	Header,
	Wrapper,
} from '.';

type Props = {
	next: BeverageBaseTypes
	previous: BeverageBaseTypes
	setFetchedBeverage: () => void
};

const UpdateContent: React.FC<Props> = props => {
	const { token } = useContext(AuthenticationContext);
	const {
		badge,
		brand,
		id,
		photos,
		shortId,
	} = useContext(BeverageContext);

	useEffect(() => {
		const apiPath = `${process.env.API_SERVER}/beverage/update-cover-outline`;
		const pathWithParams = `${apiPath}/${id}/${shortId}/${brand.badge}/${badge}`;

		if (!photos?.outlines?.cover) {
			fetch(pathWithParams, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
				.then(response => response.json())
				.then(val => {
					console.log('val', val);

					if (val) {
						// fetch for updated data
						// setFetchedBeverage()
					} else {
						console.log('error');
					}
				});
		}
	}, []);

	return (
		<Wrapper>
			<Header />
			<CoverPhoto {...props} />
			<Gallery />
		</Wrapper>
	);
}

export default withAdmin(UpdateContent);
