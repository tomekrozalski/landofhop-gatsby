import React from 'react';
import { graphql } from 'gatsby';

import LanguageValueType from 'utils/types/LanguageValue.type';
import SiteLanguages from 'utils/enums/SiteLanguages.enum';
import { getValueByLanguage } from 'utils/helpers';
import Layout from '../Layout';

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

	return <Layout>BeverageDetails: {formattedName.value}</Layout>
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
			label {
				general {
					brand {
						badge
					}
					name {
						value
						language
					}
				}
			}
		}
  }
`;

export default BeverageDetails;
