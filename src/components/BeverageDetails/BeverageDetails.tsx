import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import LanguageValueType from 'utils/types/LanguageValue.type';
import SiteLanguages from 'utils/enums/SiteLanguages.enum';
import BeveragePreviousAndNext from 'utils/types/BeveragePreviousAndNext.type'

import { getValueByLanguage } from 'utils/helpers';
import Layout from '../Layout';
import { Aside, Gallery } from '.';

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 220px 1fr 220px;
  grid-gap: 40px;


  max-width: var(--size-container-max-width);
  padding: 2rem 10px;
  margin: 0 auto 6rem auto;

`;

const Division = styled.div`
	border: 1px dotted #ddd;
	padding: 1rem;
	background-color: #eee;
`;

type Props = {
	data: {
		mongodbLandofhopBeverages: {
			badge: string
			label: {
				general: {
					brand: {
						badge: string
					}
					name: LanguageValueType[]
				}
			}
			shortId: string
		}
		allMongodbLandofhopBeverages: {
			edges: BeveragePreviousAndNext
		}
	}
	pageContext: {
		intl: {
			language: SiteLanguages
		}
	}
}

const BeverageDetails: React.FC<Props> = (props) => {
	console.log('BeverageDetails', props);

	const formattedName = getValueByLanguage(props.data.mongodbLandofhopBeverages.label.general.name, props.pageContext.intl.language);

	return (
		<Layout>
			<Wrapper>
				<Gallery />
				<Division>{formattedName.value}</Division>
				<Aside />
			</Wrapper>
		</Layout>
	);
}

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
		}
		allMongodbLandofhopBeverages(sort: {fields: added, order: DESC}) {
			edges {
				next {
					badge
					label {
						general {
							brand {
								badge
							}
						}
					}
					shortId
				}
				previous {
					badge
					shortId
					label {
						general {
							brand {
								badge
							}
						}
					}
				}
				node {
					badge
					label {
						general {
							brand {
								badge
							}
						}
					}
					shortId
				}
			}
		}
	}
`;

export default BeverageDetails;
