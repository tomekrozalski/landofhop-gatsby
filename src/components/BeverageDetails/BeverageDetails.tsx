import React, { useContext, useEffect, useState } from 'react';
import { graphql } from 'gatsby';

import { NavigationContext } from 'utils/contexts';
import {
	BeverageBase as BeverageBaseTypes,
	BeverageDetails as BeverageDetailsTypes,
	BeverageDetailsTranslated as BeverageDetailsTranslatedTypes
} from 'utils/types';
import { translateBeverageDetails } from 'utils/helpers';
import { SiteLanguage } from 'utils/enums';
import { initialBeverageData } from './utils';

import Layout from '../Layout';
import { GridWrapper } from './elements';
import {
	AdminBar,
	Aside,
	BeverageDetailsSeo,
	FootNotes,
	Gallery,
	Header,
	Impressions,
	Tale,
	Testimony,
} from '.';

type Props = {
	data: {
		beverage: BeverageDetailsTypes
	}
	pageContext: {
		badge: string
		brandBadge: string
		intl: {
			language: SiteLanguage
		}
		next: BeverageBaseTypes
		page: number
		previous: BeverageBaseTypes
		shortId: string
	}
}

// @Info: I could use Partial generic, but it would complicate displaying some components
export const BeverageContext = React.createContext<BeverageDetailsTranslatedTypes>(initialBeverageData);

const BeverageDetails: React.FC<Props> = ({
	data: {
		beverage
	},
	pageContext: {
		badge,
		brandBadge,
		next,
		page,
		previous,
		shortId,
	}
}) => {
	const { setMainLink } = useContext(NavigationContext);
	const [fetchedBeverage, setFetchedBeverage] = useState(null);

	useEffect(() => {
		setMainLink(`/list/${page}`);

		console.log('fetch', badge, brandBadge, shortId);

		// fetch('http://localhost:4000/beverage/pl/s0d8j4/browar-pinta/hazy-disco-haarlem')
		// 	.then(res => res.json())
		// 	.then(setFetchedBeverage)
		// 	.catch((e) => {
		// 		console.log('e', e);
		// 	});
	}, [])

	return (
		<Layout>
			<BeverageContext.Provider value={fetchedBeverage || translateBeverageDetails(beverage)}>
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
			</BeverageContext.Provider>
		</Layout>
	);
}

export const query = graphql`
	query BeverageDetails($badge: String!, $brandBadge: String!, $shortId: String!) {
		beverage(
			badge: { eq: $badge },
			brand: {
				badge: {
					eq: $brandBadge
				}
			},
			shortId: { eq: $shortId }
		) {
			ingredientsDescription {
				label {
					complete
					language
					value
				}
				producer {
					complete
					language
					value
				}
			}
			added
			aged {
				editorial {
					previousContent
					type
					time {
						unit
						value
					}
					wood
				}
				label {
					previousContent
					time {
						unit
						value
					}
					type
					wood
				}
				producer {
					previousContent
					time {
						unit
						value
					}
					type
					wood
				}
			}
			alcohol {
				editorial {
					scope
				}
				label {
					relate
					scope
					unit
					value
				}
				producer {
					relate
					scope
					unit
					value
				}
			}
			badge
			barcode
			bitterness {
				label
				producer
			}
			brand {
				badge
				consortium {
					language
					value
				}
				name {
					language
					value
				}
				shortId
				website
			}
			clarity {
				editorial
			}
			color {
				editorial
			}
			container {
				color
				hasCapWireFlip
				material
				type
				unit
				value
			}
			contract {
				editorial {
					badge
					consortium {
						language
						value
					}
					name {
						language
						value
					}
					shortId
					website
				}
				label {
					badge
					consortium {
						language
						value
					}
					name {
						language
						value
					}
					shortId
					website
				}
				producer {
					badge
					consortium {
						language
						value
					}
					name {
						value
						language
					}
					shortId
					website
				}
			}
			cooperation {
				editorial {
					badge
					consortium {
						language
						value
					}
					name {
						language
						value
					}
					shortId
					website
				}
				label {
					badge
					consortium {
						language
						value
					}
					name {
						language
						value
					}
					shortId
					website
				}
				producer {
					badge
					consortium {
						language
						value
					}
					name {
						language
						value
					}
					shortId
					website
				}
			}
			dryHopped {
				editorial {
					language
					value
				}
				label {
					language
					value
				}
				producer {
					language
					value
				}
			}
			expirationDate {
				label {
					unit
					value
				}
				producer {
					unit
					value
				}
			}
			extract {
				label {
					relate
					unit
					value
				}
				producer {
					relate
					value
					unit
				}
			}
			fermentation {
				editorial
				label
				producer
			}
			filtration {
				editorial
				label
				producer
			}
			fullness {
				label
				producer
			}
			hoppyness {
				label
				producer
			}
			id
			ingredientsList {
				label {
					name {
						language
						value
					}
					type
				}
				producer {
					name {
						value
						language
					}
					type
				}
			}
			isAged {
				editorial
				label
				producer
			}
			isDryHopped {
				editorial
				producer
				label
			}
			name {
				language
				value
			}
			notes
			pasteurization {
				editorial
				label
				producer
			}
			photos {
				cap
				gallery
			}
			place {
				editorial {
					city {
						language
						value
					}
					country {
						language
						value
					}
				}
				label {
					city {
						language
						value
					}
					country {
						language
						value
					}
				}
				producer {
					city {
						language
						value
					}
					country {
						language
						value
					}
				}
			}
			power {
				label
				producer
			}
			price {
				editorial {
					currency
					date
					value
				}
				label {
					currency
					date
					value
				}
				producer {
					currency
					date
					value
				}
			}
			series {
				label {
					language
					value
				}
				producer {
					language
					value
				}
			}
			shortId
			smokedMalt {
				label
				producer
			}
			style {
				editorial {
					language
					value
				}
				label {
					language
					value
				}
				producer {
					language
					value
				}
			}
			sweetness {
				label
				producer
			}
			tale {
				label {
					language
					value
				}
				producer {
					language
					value
				}
			}
			temperature {
				label {
					from
					to
					unit
				}
				producer {
					from
					to
					unit
				}
			}
			updated
		}
	}
`;

export default BeverageDetails;
