import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import {
	BaseBeverage as BaseBeverageTypes,
	Beverage as BeverageTypes
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
		beverage: BeverageTypes
	}
	pageContext: {
		intl: {
			language: SiteLanguage
		}
		next: BaseBeverageTypes
		previous: BaseBeverageTypes
	}
}

// @Info: I could use Partial generic, but it would complicate displaying some components
export const BeverageContext = React.createContext<BeverageTypes>(initialBeverageData);

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
				{/* <BeverageDetailsSeo details={details} /> */}
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
			badge
			added
			name {
				language
				value
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
