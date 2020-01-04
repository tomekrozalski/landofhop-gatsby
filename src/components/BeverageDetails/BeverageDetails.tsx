import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import {
	BeverageBase as BeverageBaseTypes,
	BeverageDetails as BeverageDetailsTypes
} from 'utils/types';
import { SiteLanguage } from 'utils/enums';
import { initialBeverageData } from './utils';

import Layout from '../Layout';
import { Header } from './Content';
import { Aside, BeverageDetailsSeo, Gallery } from '.';

const GridWrapper = styled.article`
  display: grid;
  grid-template-columns: 22rem 1fr 18rem;
  grid-gap: 4rem;
  max-width: var(--size-container-max-width);
  padding: 2rem 1rem;
  margin: 0 auto 6rem auto;
`;

type Props = {
	data: {
		beverage: BeverageDetailsTypes
	}
	pageContext: {
		intl: {
			language: SiteLanguage
		}
		next: BeverageBaseTypes
		previous: BeverageBaseTypes
	}
}

// @Info: I could use Partial generic, but it would complicate displaying some components
export const BeverageContext = React.createContext<BeverageDetailsTypes>(initialBeverageData);

const BeverageDetails: React.FC<Props> = ({
	data: {
		beverage
	},
	pageContext: {
		next,
		previous,
	}
}) => (
		<Layout>
			<BeverageContext.Provider value={beverage}>
				<GridWrapper>
					<Gallery />
					<div>
						<Header />
					</div>
					<Aside next={next} previous={previous} />
				</GridWrapper>
				<BeverageDetailsSeo />
			</BeverageContext.Provider>
		</Layout>
	);

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
			galleryPhoto {
				childImageSharp {
					fixed(width: 220) {
						...GatsbyImageSharpFixed_withWebp_tracedSVG
					}
				}
				publicURL
			}
		}
	}
`;

export default BeverageDetails;
