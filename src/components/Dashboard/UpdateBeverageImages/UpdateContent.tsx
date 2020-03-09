import React, { useContext, useEffect } from 'react';
import { FormattedMessage } from 'gatsby-plugin-intl';

import { AuthenticationContext } from 'utils/contexts';
import { BeverageBase as BeverageBaseTypes } from 'utils/types';
import { serverCall } from 'utils/helpers';
import { Header, Wrapper } from 'elements/textPage';
import { BeverageContext } from './UpdateBeverageImages';
import { withAdmin } from '../utils'
import { CoverPhoto, Gallery } from '.';

type Props = {
	next: BeverageBaseTypes
	previous: BeverageBaseTypes
	setFetchedBeverage: ({ }) => void
};

const UpdateContent: React.FC<Props> = ({ next, previous, setFetchedBeverage }) => {
	const { token } = useContext(AuthenticationContext);
	const { badge, brand, shortId } = useContext(BeverageContext);

	const updateValues = () => {
		serverCall({
			path: `beverage/update-beverage-images/pl/${shortId}/${brand.badge}/${badge}`,
			token
		})
			.then(setFetchedBeverage);
	}

	useEffect(updateValues, []);

	// useEffect(() => {
	// 	if (loaded) {
	// 		if (!photos?.outlines?.cover) {
	// 			serverCall({
	// 				path: `beverage/update-cover-outline/${id}/${shortId}/${brand.badge}/${badge}`,
	// 				token
	// 			})
	// 				.then(val => {
	// 					if (val) {
	// 						updateValues();
	// 					}
	// 				});
	// 		}
	// 		if (!photos?.outlines?.gallery) {
	// 			serverCall({
	// 				path: `beverage/update-container-outline/${id}/${shortId}/${brand.badge}/${badge}`,
	// 				token
	// 			})
	// 				.then(val => {
	// 					if (val) {
	// 						updateValues();
	// 					}
	// 				});
	// 		}
	// 	}
	// }, [loaded]);

	return (
		<Wrapper>
			<Header>
				<FormattedMessage id="dashboard.updateBeverageImages.title" />
			</Header>
			<CoverPhoto next={next} previous={previous} updateValues={updateValues} />
			<Gallery />
		</Wrapper>
	);
}

export default withAdmin(UpdateContent);
