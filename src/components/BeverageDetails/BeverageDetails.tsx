import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import {
	BeverageBase as BeverageBaseType,
	BeverageDetails as BeverageDetailsType
} from 'utils/types';
import { SiteLanguage } from 'utils/enums';
import Layout from '../Layout';
import { Header } from './Content';
import { Aside, Gallery } from '.';

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
		mongodbLandofhopBeverages: BeverageDetailsType
	}
	pageContext: {
		intl: {
			language: SiteLanguage
		}
		next: BeverageBaseType
		previous: BeverageBaseType
	}
}

const BeverageDetails: React.FC<Props> = ({
	data: {
		mongodbLandofhopBeverages: details
	},
	pageContext: {
		next,
		previous,
	}
}) => (
		<Layout>
			<GridWrapper>
				<Gallery galleryPhoto={details.galleryPhoto} />
				<div>
					<Header details={details} />
				</div>
				<Aside next={next} previous={previous} />
			</GridWrapper>
		</Layout>
	);

export const query = graphql`
	query BeverageDetails($badge: String!, $brandBadge: String!, $shortId: String!) {
		mongodbLandofhopBeverages(
			badge: { eq: $badge },
			label: {
				general: {
					brand: {
						badge: {
							eq: $brandBadge
						}
					}
				}
			},
			shortId: { eq: $shortId }
		) {
			badge
			added
			editorial {
				brewing {
					fermentation
					alcohol {
						scope
					}
					style {
						language
						value
					}
				}
				general {
					cooperation
				}
				impressions {
					color
				}
				notes
				photos {
					cap
					gallery
				}
				price {
					currency
					date
				}
			}
			label {
				general {
					name {
						value
						language
					}
					barcode
					brand {
						badge
						consortium
						name {
							language
							value
						}
						shortId
						website
					}
					contract
					cooperation
					place
					series {
						language
						value
					}
					tale {
						language
						value
					}
				}
				brewing {
					aged {
						previousContent
						time {
							unit
							value
						}
						type
						wood
					}
					alcohol {
						relate
						scope
						unit
					}
					dryHopped {
						hops
					}
					expirationDate {
						unit
						value
					}
					extract {
						relate
						unit
					}
					fermentation
					filtration
					isDryHopped
					pasteurization
					style {
						language
						value
					}
				}
				container {
					color
					hasCapWireFlip
					material
					type
					unit
					value
				}
				impressions {
					bitterness
					fullness
					hoppyness
					power
					sweetness
					temperature {
						from
						to
						unit
					}
				}
				ingredients {
					description {
						complete
						language
						value
					}
					list
					smokedMalt
				}
			}
			shortId
			updated
			producer {
				brewing {
					alcohol {
						relate
						unit
					}
					dryHopped {
						hops
					}
					expirationDate {
						unit
						value
					}
					extract {
						relate
						unit
					}
					fermentation
					style {
						language
						value
					}
				}
				general {
					tale {
						language
						value
					}
				}
				impressions {
					bitterness
					fullness
					hoppyness
					sweetness
					temperature {
						from
						unit
						to
					}
				}
				ingredients {
					list
					description {
						complete
						language
						value
					}
				}
			}
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
