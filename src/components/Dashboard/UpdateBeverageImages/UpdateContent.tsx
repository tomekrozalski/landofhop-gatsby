import React, { useContext, useEffect, useState } from 'react';

import { AuthenticationContext } from 'utils/contexts';
import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import { serverCall } from 'utils/helpers';
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
	setFetchedBeverage: ({ }) => void
};

const UpdateContent: React.FC<Props> = ({ next, previous, setFetchedBeverage }) => {
	const { token } = useContext(AuthenticationContext);
	const {
		badge,
		brand,
		id,
		photos,
		shortId,
	} = useContext(BeverageContext);
	const [loaded, setLoaded] = useState(false);

	const updateValues = () => {
		serverCall({
			path: `beverage/update-beverage-images/pl/${shortId}/${brand.badge}/${badge}`,
			token
		})
			.then(setFetchedBeverage)
			.then(() => setLoaded(true));
	}

	useEffect(updateValues, []);

	useEffect(() => {
		if (loaded) {
			if (!photos?.outlines?.cover) {
				serverCall({
					path: `beverage/update-cover-outline/${id}/${shortId}/${brand.badge}/${badge}`,
					token
				})
					.then(val => {
						if (val) {
							updateValues();
						}
					});
			}
			if (!photos?.outlines?.gallery) {
				serverCall({
					path: `beverage/update-container-outline/${id}/${shortId}/${brand.badge}/${badge}`,
					token
				})
					.then(val => {
						if (val) {
							updateValues();
						}
					});
			}
		}
	}, [loaded]);

	return (
		<Wrapper>
			<Header />
			<CoverPhoto next={next} previous={previous} />
			<Gallery />
		</Wrapper>
	);
}

export default withAdmin(UpdateContent);
